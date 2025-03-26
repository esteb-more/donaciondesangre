document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    var email = document.getElementById("email").value;
    var formData = new FormData();
    formData.append("email", email);

    // Reemplaza con la URL de tu Google Apps Script
    var url = "https://script.google.com/macros/s/AKfycbzdXStXe9rwy6YNLQibbwOuNz7l-sBateSGeWR84tSqoUPHFD9qO5VQ1QzyAk8Ur9jL/exec";

    fetch(url, {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("mensaje").innerText = "Registro exitoso. Revisa tu correo.";
        document.getElementById("email").value = ""; // Limpiar el input
    })
    .catch(error => {
        document.getElementById("mensaje").innerText = "Error en el registro.";
    });
});
