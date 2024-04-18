function myFunction() {
    let mensajeSecreto = document.getElementById("mensaje1").value;
    let palabrasSinParentesis = mensajeOculto(mensajeSecreto);
    alert(palabrasSinParentesis);
}

function mensajeOculto(mensajeSecreto) {
    const regex = /\(([^)]+)\)/g;
    return mensajeSecreto.replace(regex, (_, palabras) => {
        return palabras.split("").reverse().join("");
    });
}
