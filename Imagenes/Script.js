const  carrito = document.getElementById(`carrito`);
const elementos1 = document.getElementById(`lista-1`);
const lista = document. querySelector(" #lista-carrito tbody ");
const vaciarCarritoBtn =document.getElementById (`vaciar-carrito`);

cargarEvenListeners();
function cargarEvenListeners(){
    elementos1.addEventListener(`Click` comprarElemento);
carrito.addEventListener(`click`,eliminarElemento);
vaciarCarritoBtn.addEventListener(`click`vaciarElemento);
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.container(`agregar`))
        const elemento = e.target.parentElement.parentElement;
    leerDatosElemento (elemento);


    function leerDatosElemento(elemento){ 
       const  infoElemento ={
    imagen:elemento.querySelector(`img`).src,
    titulo:elemento.querySelector(`h3`).textContent,
    precio:elemento.querySelector(`precio`).textContent,
    id:elemento.querySelector(`a`)getAttribute(`data-id`)
}
insertarCarrito(infoElemento);
    }

    funtion insertarCarrito(elemento){
        const row = document.createElement(`tr`);
        row.innerHTML =
        <td>
            <img src="$(elemento.imagen)" width=100 >
            <td>
    
            </td>
            $(elemento.titulo)
            </td>
            </td>
            $(elemento.precio)
            </td>
            </td>
            
    }
