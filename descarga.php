<?php
// Configuración de la base de datos
$server = "localhost";
$username = "username";
$password = "password";
$database = "database";

// Conexión a la base de datos
$conn = new mysqli($server, $username, $password, $database);

// Comprobar la conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Obtener todas las tablas de la base de datos
$tables = array();
$result = $conn->query("SHOW TABLES");
while ($row = $result->fetch_array()) {
  $tables[] = $row[0];
}

// Crear una carpeta para los archivos de texto y el archivo zip
$dir = "export";
if (!is_dir($dir)) {
  mkdir($dir);
}

// Recorrer todas las tablas
foreach ($tables as $table) {
  // Obtener los datos de la tabla
  $result = $conn->query("SELECT * FROM $table");

  // Crear un archivo de texto para la tabla
  $file = fopen("$dir/$table.txt", "w");

  // Escribir los datos de la tabla en el archivo de texto
  while ($row = $result->fetch_assoc()) {
    $line = implode("\t", $row) . "\n";
    fwrite($file, $line);
  }

  // Cerrar el archivo de texto
  fclose($file);
}

// Crear un archivo zip para los archivos de texto
$zip = new ZipArchive();
$zip_name = "export.zip";
if ($zip->open($zip_name, ZipArchive::CREATE) !== TRUE) {
  die("No se pudo crear el archivo zip");
}

// Agregar los archivos de texto al archivo zip
$files = scandir($dir);
foreach ($files as $file) {
  if ($file != "." && $file != "..") {
    $zip->addFile("$dir/$file", $file);
  }
}

// Cerrar el archivo zip
$zip->close();

// Descargar el archivo zip
header("Content-type: application/zip");
header("Content-Disposition: attachment; filename=$zip_name");
header("Content-length: " . filesize($zip_name));
header("Pragma: no-cache");
header("Expires: 0");
readfile("$zip_name");

// Eliminar los archivos de texto y el archivo zip
array_map('unlink', glob("$dir/*.txt"));
unlink($zip_name);
?>
