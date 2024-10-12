const carrito = document.getElementById(`carrito`);
const elementos = document.getElementById(`lista-1`);
const lista = document.querySelector(`#alista-carrito tbody`);
const vaciarCarritoBtn = document.getElementById(`vaciar-carrito`);

cargarEventListeners();

function cargarEventListeners() {
  elementos1.addEventListener('click', comprarElemento);  
  carrito.addEventListener('click', eleminarElemento);
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}
function comprarElemento(e) {
    e.preventDefault();
 if  (e.target-classList.contains('agregar-carrito')){
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento);
 }
}

function leerDatosElemento(elemento){
    const infoElemento ={
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento. querySelector('precio').textContent,
        id: elemto. querySelector('a').getAttribute('data-id')
    }
    isertarCarrito(infoElemento);
}
function isertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML =`
    <td>
    <img src="${elemento.imagen}"width=100 >
    </td>
    <td>
    ${elemto.titulo}
    </td>
    <td>
    ${elemto.precio}
    </td>
     <td>
     <a heref="#" class="borrar" data-id="${elemento.id}"> X </a>
    </td>
    `;
    lista.appendChild(row);
}

function eleminarElemento(e) {
    e.preventDefault();
    let elemento,
    elementoId;
    if (e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemto = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id')
    }
}
function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
