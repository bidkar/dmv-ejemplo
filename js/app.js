function login(usuario, passwd) {
    $.post("login.php", { txtusuario:usuario, txtpassword:passwd }, function(response) {
        var acceso = response.data.login;
        if (acceso == true) {
            var usuario = response.data.usuario;
            sessionStorage.userid = usuario.id;
            sessionStorage.username = usuario.username;
            sessionStorage.nombre = usuario.nombre;
            sessionStorage.apellidos = usuario.apellidos;
            sessionStorage.email = usuario.email;
            console.log(usuario);
        } else if (acceso == false) {
            $('#login-form-msg').html('Usuario o contraseña incorrecta');
            $('#login-form-msg').removeClass('oculto');
            $('#txtpassword').val('');
            console.warn('acceso incorrecto');
        } else {
            $('#login-form-msg').html('Error en la conexion a la base de datos');
            $('#login-form-msg').removeClass('oculto');
            console.error('error en la consulta');
        }
    });
}

$(document).ready(function() {
    $('#login-button').click(function(event) {
        event.preventDefault();
        var usuario = $('#txtusuario').val();
        var passwd = $('#txtpassword').val();
        if (usuario == '') {
            // quitar la clase oculto del div de error de txtusuario
            $('#txtusuario+div').removeClass('oculto');
        } else {
            $('#txtusuario+div').addClass('oculto');
        }
        if (passwd == '') {
            // quitar la clase oculto del div de error de txtpassword
            $('#txtpassword+div').removeClass('oculto');
        } else {
            $('#txtpassword+div').addClass('oculto');
        }
        if (usuario != '' && passwd != '') {
            login(usuario, passwd);
        }
    });
});