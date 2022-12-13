
const productos = [
    { id: 1, nombre: "Nintendo Switch", precio: 170.000, img: '/img/Gaming/Consolas/Nintendo Switch.jpg' },
    { id: 2, nombre: "Xbox Series S", precio: 129.999, cantidad: 5, img: "" },
    { id: 3, nombre: "Joystick PS4", precio: 27.999, cantidad: 6, img: "" },
    { id: 4, nombre: "PS5", precio: 349.999, cantidad: 4, img: "" },
    { id: 5, nombre: "Joystick PS5", precio: 25.999, cantidad: 2, img: "" },
    { id: 6, nombre: "Joystick Nintendo Switch", cantidad: 4, precio: 26.999, img: "" },
    { id: 7, nombre: "Xbox Series X", precio: 220.999, cantidad: 3, img: "" },
    { id: 8, nombre: "Joy-Con Nintendo Switch", precio: 47.999, cantidad: 6, img: "" },
    { id: 9, nombre: "PS4", precio: 119.999, cantidad: 8, img: "" }]

const carrito = []
const botonGP1 = document.getElementById('GP1')
const botonGP2 = document.getElementById("GP2")
const botonGP3 = document.getElementById("GP3")
const botonGP4 = document.getElementById("GP4")
const botonGP5 = document.getElementById("GP5")
const botonGP6 = document.getElementById("GP6")
const botonGP7 = document.getElementById("GP7")
const botonGP8 = document.getElementById("GP8")
const botonGP9 = document.getElementById("GP9")
const contenedorCarro = document.getElementById("contenedor-carro")
const listaProductos = document.querySelector('#lista-carrito tbody');

botonGP1.onclick = (carri) => {
    cargaProductos(carrito)
}
botonGP2.onclick = (carri) => {
    cargaProductos2(carrito)

}
botonGP3.onclick = (carri) => {
    cargaProductos3(carrito)

}
botonGP4.onclick = (carri) => {
    cargaProductos4(carrito)

}
botonGP5.onclick = (carri) => {
    cargaProductos5(carrito)

}
botonGP6.onclick = (carri) => {
    cargaProductos6(carrito)

}
botonGP7.onclick = (carri) => {
    cargaProductos7(carrito)

}
botonGP8.onclick = (carri) => {
    cargaProductos8(carrito)

}
botonGP9.onclick = (carri) => {
    cargaProductos9(carrito)

}


function cargaProductos(carrito) {

    carrito.push(new Producto(2, "Xbox Series S", 129.999, ""))
    for (const it of carrito) {
        console.log(it)
        creaHTML(it)

    }

}
function cargaProductos2(carrito) {
    carrito.push(new Producto(3, "Joystick PS4", 170.000, ""))
    for (const it1 of carrito) {
        console.log(it1)
        creaHTML(it1)
    }
}

function cargaProductos3(carri) {
    carrito.push(new Producto(3, "Joystick PS4", 170.000, ""))
    for (const it2 of carrito) {
        console.log(it2)
        creaHTML(it2)
    }
}
function cargaProductos4(carri) {
    carrito.push(new Producto(3, "Joystick PS4", 170.000, ""))
    for (const it3 of carrito) {
        console.log(it3)
        creaHTML(it3)
    }
}
function cargaProductos5(carri) {
    carrito.push(new Producto(3, "Joystick PS4", 170.000, ""))
    for (const it4 of carrito) {
        console.log(it4)
        creaHTML(it4)
    }
}
function cargaProductos6(carri) {
    carrito.push(new Producto(3, "Joystick PS4", 170.000, ""))
    for (const it5 of carrito) {
        console.log(it2)
        creaHTML(it5)
    }
}
function cargaProductos7(carri) {
    carrito.push(new Producto(3, "Joystick PS4", 170.000, ""))
    for (const it6 of carrito) {
        console.log(it6)
        creaHTML(it6)
    }
}
function cargaProductos8(carri) {
    carrito.push(new Producto(3, "Joystick PS4", 170.000, ""))
    for (const it7 of carrito) {
        console.log(it7)
        creaHTML(it7)
    }
}
function cargaProductos9(carri) {
    carrito.push(new Producto(3, "Joystick PS4", 170.000, ""))
    for (const it8 of carrito) {
        console.log(it8)
        creaHTML(it8)
    }
}
function Producto(id, nombre, precio, img) {
    {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.img = img;
    }


}
const creaHTML = (it) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td scope="row" style= "font-size:15px>${it.id}</td>
        <td scope="row" style= "font-size:15px">${it.nombre}</td>
        <td scope="row" style= "font-size:15px>${it.precio}</td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" data-id="${it.id}"></a>
        </td>
        `
    listaProductos.appendChild(row);
    guardarProductosLocalStorage(it);



}
const vaciarCarrito = (e) => {
    e.preventDefault();
    while (listaProductos, firstChild) {
        listaProductos.removeChild(listaProductos.firstChild);
    }
    vaciarLocalStorage();
    return false;
}
const guardarProductosLocalStorage = () => {
    let productoLS;
    if (localStorage.getItem('productos') === null) {
        productoLS = [];
    }
    else {
        productoLS = JSON.parse(localStorage.getItem('productos'));
    }
    return productoLS;
}





