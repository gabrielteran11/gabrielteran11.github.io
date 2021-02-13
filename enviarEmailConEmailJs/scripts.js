function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById('fromName').value,
        to_name: document.getElementById('toName').value,
        message: document.getElementById('msg').value
    }

    emailjs.send('service_cp0diwx', 'template_m5wi9kj', tempParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Mail enviado")
        }, function(error) {
            console.log('FAILED...', error);
            alert("No se ha podido enviar el mail")
        });
}