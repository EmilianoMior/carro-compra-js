const Productos = [
    { id: 1, nombre: "Nintendo Switch", precio: 169.999, cantidad: 1, img: '/img/Gaming/Consolas/Nintendo Switch.jpg' },
    { id: 2, nombre: "Xbox Series S", precio: 129.999, cantidad: 1, img: '/img/Gaming/Consolas/Xbox Series S.jpg' },
    { id: 3, nombre: "Joystick PS4", precio: 27.999, cantidad: 1, img: '/img/Gaming/Consolas/Joystick PS4.jpg' },
    { id: 4, nombre: "PS5", precio: 349.999, cantidad: 1, img: '/img/Gaming/Consolas/PS5.jpg' },
    { id: 5, nombre: "Joystick PS5", precio: 25.999, cantidad: 1, img: '/img/Gaming/Consolas/Joystick PS5.jpg' },
    { id: 6, nombre: "Joystick Nintendo Switch", precio: 26.999, cantidad: 1, img: '/img/Gaming/Consolas/Joystick Nintendo Switch.jpg' },
    { id: 7, nombre: "Xbox Series X", precio: 220.999, cantidad: 1, img: '/img/Gaming/Consolas/XBOX_SERIES_X.png' },
    { id: 8, nombre: "Joy-Con Nintendo Switch", precio: 47.999, cantidad: 1, img: '/img/Gaming/Consolas/JOY-CON NINTENDO SWITCH.jpg' },
    { id: 9, nombre: "PS4", precio: 119.999, cantidad: 1, img: '/img/Gaming/Consolas/Joystick PS4.jpg' }
];


class Carrito {
    constructor(id, nombre, cantidad, precio, imagen, total) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.total = precio * cantidad;
    }
}

let carrito = [];
const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");

const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.getElementById('totalProceso');
const formulario = document.querySelector('#procesar-pago')
const inputSearch = document.getElementById('input-search');
const btnPagar = document.getElementById('btnPagar');
const btnBAvanzada = document.getElementById('btnBAvanzada');
const btnbuscar = document.getElementById('btn-buscar');
const precioDolarText = document.getElementById('precio-dolar');
const precioDolar = fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');




const JSONResponse = async (data) => {
    const response = await data;
    return await response.json();
}
const traerDolar = async () => {
    const respuesta = await JSONResponse(precioDolar);
    console.log(respuesta);
    const oficial = respuesta.find(dolar => dolar.casa.agencia === '349')
    precioDolarText.innerText = `Dolar Oficial: Compra: $${oficial?.casa.compra} - Venta: $${oficial?.casa.venta}`
}

if (activarFuncion) {
    activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    mostrarCarrito();

});
if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
        carrito.length = [];

        eliminarProducto()
        mostrarCarrito();

    });
}
if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
        if (carrito.length === 0) {
            Swal.fire({
                title: "¡Tu carrito está vacio!",
                text: "Compra algo para continuar con la compra",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        } else {
            location.href = "../compra.html";
        }
    });
}
Productos.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedor) {
        contenedor.innerHTML += `
      <div class="card mt-3" style="width: 18rem;">
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
      </div>
    </div>
      `;
    }
});
const agregarProducto = (id) => {

    if (!id) {
        return;
    }
    const producto = Productos.find(el => el.id === id);

    if (producto) {
        const productoCarrito = new Carrito(producto.id, producto.nombre, 1, producto.precio, producto.imagen, producto.total);

        if (carrito.some(el => el.id === id)) {
            const target = carrito.find(el => el.id === id);
            carrito = carrito.filter(el => el.id !== id);

            const nuevoProducto = new Carrito(target.id, target.nombre, target.cantidad + 1, target.precio, target.imagen, target.total);
            carrito.push(nuevoProducto)
        } else {
            carrito.push(productoCarrito);
        }

    }

    mostrarCarrito()

};

const mostrarCarrito = () => {
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    if (contenedorCarrito) {
        contenedorCarrito.innerHTML = "";
        carrito.forEach((prod) => {
            const { id, nombre, precio, cantidad, total } = prod;
            console.log(contenedorCarrito);
            contenedorCarrito.innerHTML += `  
            <tr>
                
                <th class="text-center" style="font-size:14px scope="row">${id}</th>
                <td class="text-center" style="font-size:14px">${nombre}</td>
                <td class="text-center" style="font-size:14px">${precio}</td>
                <td class="text-center" style="font-size:14px">${cantidad}</td>
                <td class="text-center" id="total"style="font-size:14px">$${total}</td>
                <td><button  class="btn btn-danger btn-sm" onclick="eliminarProducto(${id})" >Borrar</button></td>     
               
               
               
            </tr>
           
        
    
    
        `;
            guardarStorage();
        });

    }
}

function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
    const productoId = id;
    carrito = carrito.filter((pro) => pro.id !== productoId);
    mostrarCarrito();
    if (carrito.length === 1) {
        localStorage.removeItem(id)
    }
    else {
        localStorage.removeItem('carrito')
    }


}

function procesarPedido() {
    carrito.forEach((prod) => {
        const listaCompra = document.getElementById("#contenedorCompra");

        const { id, nombre, precio, img, cantidad } = prod;
        if (listaCompra) {
            const row = document.createElement("tr");
            row.innerHTML += `
                <td>
                    <img class="img-fluid img-carrito" src="${img}"/>
                </td>
                <td>${id}</td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>${precio * cantidad}</td>
              
  
              `;

            listaCompra.appendChild(row);




        }
    });


}


const dibujarProductos = (Productos, contenedor) => {
    let acumulador = '';

    Productos.forEach(element => {
        acumulador += `
        <div class="card mt-3" style="width: 18rem;">
            <img class="card-img-top mt-2" src="${element.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">Precio: ${element.precio}</p>
                <p class="card-text">Descripcion: ${element.desc}</p>
                <p class="card-text">Cantidad: ${element.cantidad}</p>
                <button class="btn btn-primary" onclick="agregarProducto(${element.id})">Comprar Producto</button>
            </div>
        </div>


        `
    });
    contenedor.innerHTML = acumulador;


}

const handleSearch = (e) => {
    console.log(e.target.value);

    const filtrados = Productos.filter(Producto => Producto.nombre.toLocaleLowerCase().includes(e.target.value.toLowerCase()))


    dibujarProductos(filtrados, contenedor)
}

inputSearch.addEventListener('input', handleSearch)

Cuotas.forEach((cuota) => {

    formularioCuota.cuotas.innerHTML += `<option value=${cuota}`
})


traerDolar();























