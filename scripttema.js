const botonCambioModo = document.getElementById('CambioModo');
const body = document.body;

botonCambioModo.addEventListener('click', () => {
    if (body.classList.contains('noche')) {
        body.classList.remove('noche');
    } else {
        body.classList.add('noche');
    }
});