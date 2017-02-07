<?php
require 'conexion.php';
require 'usuario.php';

session_start();
header('Content-Type: application/json');

if($_SESSION['user']) {
    echo json_encode($_SESSION['user']);
} else {
    $usuario = $_POST['txtusuario'];
    $passwd = $_POST['txtpassword'];
    echo Usuario::login($usuario,$passwd);
}

