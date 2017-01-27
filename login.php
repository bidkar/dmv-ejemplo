<?php
require 'conexion.php';
require 'usuario.php';

$usuario = $_POST['txtusuario'];
$passwd = $_POST['txtpassword'];

header('Content-Type: application/json');
echo Usuario::login($usuario,$passwd);
