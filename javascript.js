import {Product} from "./producto.js";


// Para mostrar el menú desplegable
// Listener único para manejar tanto 'mouseover' en .span como 'mouseleave' en .category
// Listener único para manejar 'mouseenter' en .span y 'mouseleave' en .category
document.querySelector('.menu_desplegable').addEventListener('mouseenter', (e) => {
    if (e.target.matches('.span')) {
        const menu = e.target.nextElementSibling; // El siguiente hermano, que es la lista
        menu.classList.add('active'); // Mostrar el menú
    }
}, true);

document.querySelector('.menu_desplegable').addEventListener('mouseleave', (e) => {
    if (e.target.matches('.category')) {
        const menu = e.target.querySelector('.lista'); // Buscar el menú dentro de la categoría
        menu.classList.remove('active'); // Ocultar el menú al salir
    }
}, true);




// Asegúrate de que la clase 'active' controle la visibilidad del menú (por ejemplo, con display: block/none)


// document.querySelector('body').addEventListener('mouseout', (e) => {
//     if (e.target.matches('.span')) {
//         const $aliado = e.target.nextElementSibling;
//         $aliado.classList.remove('active');  // Elimina la clase solo cuando el mouse sale del elemento
//     }
// });

