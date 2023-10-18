
const botonInicioSesion = document.getElementById("botonInicioSesion")
const inputUsuario = document.getElementById("nombreDeUsuario")
const inputContraseña = document.getElementById("contraseña")
const leyendaInicioSesion = document.getElementById("leyendaInicioSesion")
const ventanaInicioSesion = document.getElementById("inicioSesion")

botonInicioSesion.addEventListener("click",acceder)

function acceder(){
    if(inputUsuario.value == "" || inputContraseña.value == ""){
        leyendaInicioSesion.innerText = "Ingrese un usuario y/o contraseña validos"
        leyendaInicioSesion.className = "denied"
    }else{
        ventanaInicioSesion.className = "hidden"
        localStorage.setItem("nombre de usuario", inputUsuario.value)
        localStorage.setItem("contraseña", inputContraseña.value)
        function usuario(nombreDeUsuario,contraseña){
            this.usuario = nombreDeUsuario
            this.contraseña = contraseña
        }
        const usuario1 = new usuario(localStorage.getItem("nombre de usuario"),localStorage.getItem("contraseña"))
        console.log(usuario1)
    }
}

let productos = [
    {id:1, nombre: "barspoon", img:"./public/images/barspoonImg", precio: 4000},
    {id:2, nombre: "coctelera", img:"./public/images/cocteleraImg.jpg", precio: 6600},
    {id:3, nombre: "colador", img:"./public/images/coladorOrugaImg.jpg", precio: 3700},
    {id:4, nombre: "jigger", img:"./public/images/jiggerImg.jpg", precio: 3250}
]

const addBarspoon = document.getElementById("addBarspoon")
const addCoctelera = document.getElementById("addCoctelera")
const addColador = document.getElementById("addColador")
const addJigger = document.getElementById("addJigger") 

addBarspoon.addEventListener("click",agregarBarspoonAlCarrito)
addCoctelera.addEventListener("click",agregarCocteleraAlCarrito)
addColador.addEventListener("click",agregarColadorAlCarrito)
addJigger.addEventListener("click",agregarJiggerAlCarrito)

let carrito = document.getElementById("carrito")
let productosCarrito = []
let elementosCarrito = document.getElementById("elementosCarrito")

function agregarBarspoonAlCarrito(){
    productosCarrito.push({id:1, nombre: "barspoon", img:"./public/images/barspoonImg", precio: 4000})
    let divsCarrito = document.createElement("div")
    const uniqueID = Date.now()
    divsCarrito.innerHTML = `<div class="containerColumn">
    <img src=${productos[0].img}></img>
    <p>Barspoon <br> $4000 <br> <button class="eliminarDelCarrito" id="eliminarDelCarrito${uniqueID}">eliminar</button></p>
    </div>`
    elementosCarrito.appendChild(divsCarrito)
    let pCarritoVacio = document.getElementById("pCarritoVacio")
    if(pCarritoVacio){
        pCarritoVacio.remove()
    }
    let eliminarDelCarrito = document.getElementById(`eliminarDelCarrito${uniqueID}`)
    eliminarDelCarrito.addEventListener(`click`,funcionEliminacionDelCarrito)
    function funcionEliminacionDelCarrito(){
        if(divsCarrito.parentNode){
            divsCarrito.remove()
        }
        let indiceAEliminar = productosCarrito.findIndex((x) => x.nombre == `barspoon`)
        productosCarrito.splice(indiceAEliminar,1)
        if(productosCarrito.length == 0){
            let pCarritoVacio = document.createElement("p")
            pCarritoVacio.innerHTML = `<br><p id="pCarritoVacio">tu carrito de compras esta vacio</p>`
            carrito.appendChild(pCarritoVacio)
        }
    }
}

function agregarCocteleraAlCarrito(){
    productosCarrito.push({id:2, nombre: "coctelera", img:"./public/images/cocteleraImg", precio: 6600})
    let divsCarrito = document.createElement("div")
    const uniqueID = Date.now()
    divsCarrito.innerHTML = `<div class="containerColumn">
    <img src=${productos[1].img}></img>
    <p>Coctelera <br> $6600 <br> <button class="eliminarDelCarrito" id="eliminarDelCarrito${uniqueID}">eliminar</button></p>
    </div>`
    elementosCarrito.appendChild(divsCarrito)
    let pCarritoVacio = document.getElementById("pCarritoVacio")
    if(pCarritoVacio){
        pCarritoVacio.remove()
    }
    let eliminarDelCarrito = document.getElementById(`eliminarDelCarrito${uniqueID}`)
    eliminarDelCarrito.addEventListener(`click`,funcionEliminacionDelCarrito)
    function funcionEliminacionDelCarrito(){
        if(divsCarrito.parentNode){
            divsCarrito.remove()
        }
        let indiceAEliminar = productosCarrito.findIndex((x) => x.nombre == `coctelera`)
        productosCarrito.splice(indiceAEliminar,1)
        if(productosCarrito.length == 0){
            let pCarritoVacio = document.createElement("p")
            pCarritoVacio.innerHTML = `<p id="pCarritoVacio">tu carrito de compras esta vacio</p>`
            carrito.appendChild(pCarritoVacio)
        }
    }
}

function agregarColadorAlCarrito(){
    productosCarrito.push({id:3, nombre: "colador", img:"./public/images/coladorOrugaImg.jpg", precio: 3700})
    let divsCarrito = document.createElement("div")
    const uniqueID = Date.now()
    divsCarrito.innerHTML = `<div class="containerColumn">
    <img src=${productos[2].img}></img>
    <p>Colador Oruga <br> $3700 <br> <button class="eliminarDelCarrito" id="eliminarDelCarrito${uniqueID}">eliminar</button></p>
    </div>`
    elementosCarrito.appendChild(divsCarrito)
    let pCarritoVacio = document.getElementById("pCarritoVacio")
    if(pCarritoVacio){
        pCarritoVacio.remove()
    }
    let eliminarDelCarrito = document.getElementById(`eliminarDelCarrito${uniqueID}`)
    eliminarDelCarrito.addEventListener(`click`,funcionEliminacionDelCarrito)
    function funcionEliminacionDelCarrito(){
        if(divsCarrito.parentNode){
            divsCarrito.remove()
        }
        let indiceAEliminar = productosCarrito.findIndex((x) => x.nombre == `colador`)
        productosCarrito.splice(indiceAEliminar,1)
        if(productosCarrito.length == 0){
            let pCarritoVacio = document.createElement("p")
            pCarritoVacio.innerHTML = `<p id="pCarritoVacio">tu carrito de compras esta vacio</p>`
            carrito.appendChild(pCarritoVacio)
        }
    }
}
function agregarJiggerAlCarrito(){
    productosCarrito.push({id:4, nombre: "jigger", img:"./public/images/jiggerImg.jpg", precio: 3250})
    let divsCarrito = document.createElement("div")
    const uniqueID = Date.now()
    divsCarrito.innerHTML = `<div class="containerColumn">
    <img src=${productos[3].img}></img>
    <p>Jigger <br> $3250 <br> <button class="eliminarDelCarrito" id="eliminarDelCarrito${uniqueID}">eliminar</button></p>
    </div>`
    elementosCarrito.appendChild(divsCarrito)
    let pCarritoVacio = document.getElementById("pCarritoVacio")
    if(pCarritoVacio){
        pCarritoVacio.remove()
    }
    let eliminarDelCarrito = document.getElementById(`eliminarDelCarrito${uniqueID}`)
    eliminarDelCarrito.addEventListener(`click`,funcionEliminacionDelCarrito)
    function funcionEliminacionDelCarrito(){
        if(divsCarrito.parentNode){
            divsCarrito.remove()
        }
        let indiceAEliminar = productosCarrito.findIndex((x) => x.nombre == `jigger`)
        productosCarrito.splice(indiceAEliminar,1)
        if(productosCarrito.length == 0){
            let pCarritoVacio = document.createElement("p")
            pCarritoVacio.innerHTML = `<p id="pCarritoVacio">tu carrito de compras esta vacio</p>`
            carrito.appendChild(pCarritoVacio)
        }
    }
}




