function login(usuario, passwd) {
    $.post("login.php", { txtusuario:usuario, txtpassword:passwd }, function(data) {
        acceso = data.data.login;
        if (acceso == true) {
            console.log('acceso correcto');
        } else if (acceso == false) {
            console.warn('acceso incorrecto');
        } else {
            console.error('error en la consulta');
        }
    });
}

$(document).ready(function() {
    $('#login-button').click(function(event) {
        event.preventDefault();
        var usuario = $('#txtusuario').val();
        var passwd = $('#txtpassword').val();
        login(usuario, passwd);
    });
});