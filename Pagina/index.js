// index.js

// Agregar evento al botón de menú
const menuButton = document.querySelector('.menu button');
const dropdown = document.querySelector('.dropdown');

// Alternar el menú desplegable al hacer clic en el botón
menuButton.addEventListener('click', () => {
    const isDropdownVisible = dropdown.style.display === 'block';
    dropdown.style.display = isDropdownVisible ? 'none' : 'block';
});

// Cerrar el menú desplegable si se hace clic fuera de él
window.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});