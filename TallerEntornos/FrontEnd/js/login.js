function validarLogin(){
    let Correo = document.getElementById('member_email').value;
    let contraseña = document.getElementById('member_password').value;
    
    let data = {
        'email': Correo,
        'password': contraseña
    };
    
    let request = sendRequest('api/members/loginmember', 'POST', data);
    
    request.onload = function(){
        let dataResponse = request.response;
        console.log(dataResponse);

        if(dataResponse === 1){
            alert("Inicio de sesión éxitoso");
            window.location = 'index.html';
        } else {
            alert('Correo o contraseña incorrectos.');
        }
    };

    request.onerror = function(){
        alert("Error al enviar la solicitud.");
    };
}