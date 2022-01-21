// Importar el archivo data.js

import { data } from '../data/peliculas.js';

//Inicializacion de la libreria Glider mediante el evento de cargar la pagina
window.addEventListener('load', function () {
    new Glider(document.querySelector('.row'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
                // Pantallas con resolucion mayor a 450 >= 450px
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                // Pantallas con resolucion mayor a 800 >= 800px
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    });
});

//zona de variables capturas desde el html
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');
const imagenP = document.getElementById("imagen-central");
const descripcion = document.getElementById("sinopsis");


//El evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

    //invocar a la funcion para cargar las imagenes en el DOM (loadImagesInDOM)
    //y le envíamos el parametro de data
    loadImageInDOM(data);
});

const loadImageInDOM = data => {

    //capturas uno a uno los elementos que se encuentran en el arreglo de objetos "data"
    data.forEach(pelicula => {

        templateCard.querySelector('h5').textContent = pelicula.name;
        templateCard.querySelector('img').setAttribute('src', pelicula.image);
        templateCard.querySelector('img').setAttribute('title', pelicula.name);
        templateCard.querySelector('img').dataset.id = pelicula.id;

        //cloneNode
        const clone = templateCard.cloneNode(true);
        //adicionamos los clones al fragment
        fragment.appendChild(clone)
    })

    //adicionar el fragmen a nuestros ITEMS
    items.appendChild(fragment);
}

//Evento que permite cargar la caratula y la sinopsis de la pelicula al pasar el mouse sobre la foto de una pelicula.
document.addEventListener('mouseover', (e) => {

    let idTarget = e.target.dataset.id;

    if(idTarget === undefined){
        console.log("Debe ir a la pagina Web")
    }
    data.forEach(pelicula => {
        const { id, name, director, sinapsis, caratula, image} = pelicula;
        if (id == idTarget) {

            const objeto = {
                id: id,
                name: name,
                director: director,
                sinapsis: sinapsis,
                caratula: caratula,
                image: image,
            }
            imagenP.setAttribute('src', caratula);
            imagenP.setAttribute('style', 'width: 550px; height:360px; max-width: 100%;');
            descripcion.textContent = sinapsis;
        }

    e.stopPropagation();
    e.preventDefault();
    })
})

