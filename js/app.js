function login(usuario, passwd) {
    $.post("login.php", { txtusuario:usuario, txtpassword:passwd }, function(data) {
        return data;
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