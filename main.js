

const productos = [
    { id: 1, nombre: "Nintendo Switch", precio: 169.999, cantidad: 5, img: '/img/Gaming/Consolas/Nintendo Switch.jpg' },
    { id: 2, nombre: "Xbox Series S", precio: 129.999, cantidad: 4, img: '/img/Gaming/Consolas/Xbox Series S.jpg' },
    { id: 3, nombre: "Joystick PS4", precio: 27.999, cantidad: 12, img: '/img/Gaming/Consolas/Joystick PS4.jpg' },
    { id: 4, nombre: "PS5", precio: 349.999, cantidad: 7, img: '/img/Gaming/Consolas/PS5.jpg' },
    { id: 5, nombre: "Joystick PS5", precio: 25.999, cantidad: 8, img: '/img/Gaming/Consolas/Joystick PS5.jpg' },
    { id: 6, nombre: "Joystick Nintendo Switch", precio: 26.999, cantidad: 9, img: '/img/Gaming/Consolas/Joystick Nintendo Switch.jpg' },
    { id: 7, nombre: "Xbox Series X", precio: 220.999, cantidad: 8, img: '/img/Gaming/Consolas/XBOX_SERIES_X.png' },
    { id: 8, nombre: "Joy-Con Nintendo Switch", precio: 47.999, cantidad: 15, img: '/img/Gaming/Consolas/JOY-CON NINTENDO SWITCH.jpg' },
    { id: 9, nombre: "PS4", precio: 119.999, cantidad: 6, img: '/img/Gaming/Consolas/Joystick PS4.jpg' }
];

let carrito = [];
let total = 0;
let contador = 0;



class Carrito {
    constructor(id, nombre, cantidad, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.total = precio * cantidad;
    }


}
const contenedor = document.getElementById('contenedor');
const inputSearch = document.getElementById('input-search');
const contenedorCarrito = document.getElementById('contenedor-carrito');
const precioTotal = document.querySelector('.precio-total')


const dibujarProductos = (productos, contenedor) => {
    let acumulador = '';

    productos.forEach(element => {
        acumulador += `
        <div class="card" id="P1">
        <div class="card">
            <img src="${element.img}" height="300" width="300" alt="">  
            <h1 class="card-title pricing-card-title precio">$ <span class="">${element.precio}</span></h1>
            <ul class="list-unstyled mt-3 mb-4">
                <li>${element.nombre}</li>
            </ul>
             <button type="button" onclick="agregarAlCarrito(${element.id})" id="agregar(${element.id})" class="btn btn-primary agregar-carrito" data-bs-toggle="button">Comprar</button> 
           
        </div>
    </div>
        `
    });
    // <button class="btnCarrito" id="btn-agregar${element.id}" >Comprar</button>
    contenedor.innerHTML = acumulador;

}


dibujarProductos(productos, contenedor)



function agregarAlCarrito(id) {


    const producto = productos.find(el => el.id === id)
    if (producto) {

        const productoCarrito = new Carrito(producto.id, producto.nombre, producto.precio, producto.cantidad, producto.img)
        if (carrito.some(el => el.id === id)) {
            const target = carrito.find(el => el.id === id);
            carrito = carrito.filter(el => el.id !== id);
            const nuevoProducto = new Carrito(target.id, target.nombre, target.cantidad + 1, target.precio, target.imagen);
            carrito.push(nuevoProducto)
        } else {
            carrito.push(productoCarrito);
        }


    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    listarCarrito(carrito)
    console.log(carrito)



    // let existe = carrito.some(pro => pro.id === producto.id);
    // if (existe === false) {
    //     producto.cantidad = 1;
    //     carrito.push(productos);
    // }
    // else {
    //     let prodFind = carrito.find(pro => pro.id === producto.id)
    //     prodFind.cantidad++;
    // }
    // console.log(carrito);


}

const listarCarrito = (productosCarrito) => {
    let acumulador = '';

    productosCarrito.forEach((producto) => {
        acumulador += `
         <tr>
         <th scope="row">${producto.id}</th>
             <td class="text-center" style="font-size:14px">${producto.nombre}</td>
             <td class="text-center" style="font-size:14px">${producto.cantidad}</td>
             <td class="text-center" style="font-size:14px">${producto.precio}</td>
             <td class="text-center" id="total"style="font-size:14px">$${producto.total}</td>
             <td><button class="btn btn-danger btn-sm" id="btn-borrar${producto.id}" >Borrar</button></td>
       

       </tr>
         `
    })
    contenedorCarrito.innerHTML = acumulador;

    //borrarProducto()
}
//borrarProducto()


function eliminarProducto(e) {
    e.preventDefault();
    let prod, prodId
    if (e.target.classList.contains(`btn-borrar${producto.id}`)) {
        e.target.parentElement.parentElement.remove();
        prod = target.parentElement.parentElement
        prodId = prod.querySelector('<td>').getAttribute('')

    }
    this.eliminarProductoLS(prodId)
}

// function borrarProducto() {
//     carrito.forEach(productos => {
//         document.querySelector(`#btn-borrar${producto.id}`).addEventListener("click", () => {
//             let indice = carrito.findIndex(e => e.id === productos.id);
//             carrito.splice(indice, 1)
//             listarCarrito()
//             console.log("borrar")

//         })
//     })
//     // if (e.target.classList.contains('delete-product')) {
//     //     const borrarId = e.target.getAttribute('data-id')

//     //     carrito.forEach(valor => {
//     //         if (valor.id == borrarId) {
//     //             let precioReduce = parseFloat(valor.precio) * parseFloat(valor.amount)
//     //             total = total - precioReduce
//     //             total = total.toFixed(2)

//     //         }
//     //     })
//     //     carrito = carrito.filter(producto => producto.id !== borrarId)
//     //     contador--;
//     // }
//     // if (carrito.length === 0) {

//     // }


//     // const btnBorrar = document.getElementById('btn-borrar')

//     // btnBorrar.onclick = () => {
//     //     console.log("Borrar")
//     //     ti

//     // }


// }

// carrito.forEach(producto => {
//     document.querySelector(`#btn-borrar${producto.id}`).addEventListener('click', () => {
//         let indice = carrito.findIndex(e => e.id === producto.id)
//         carrito.splice(indice, 1)
//         listarCarrito()
//     })



// function total() {
//     let total = document.getElementById("total")
//     let resultado = carrito.reduce((acc, el) => acc + el.precio, 0)
//     total.innerText = resultado.toFixed(2)

// }
// total();








// const agregarAlCarrito = (id) => {
//   //Si no hay id, que no agregue al carrito.
//   if (!id) {
//     return;
//   }
//   //Busca el producto
//   const producto = productos.find(el => el.id === id);
//   //Si existe el producto:
//   if (producto) {
//     //Si quiero mas de un producto:
//     //const productoCarrito = new Carrito(producto.id, producto.nombre, producto.cantidad, producto.precio, producto.imagen);
//     const productoCarrito = new Carrito(producto.id, producto.nombre, 1, producto.precio, producto.imagen);

//     //some:Algun elemento. 
//     //Si hay un producto igual con mismo id
//     if (carrito.some(el => el.id === id)) {
//       //Lo busco:
//       const target = carrito.find(el => el.id === id);
//       //Lo saco del carrito:
//       carrito = carrito.filter(el => el.id !== id);
//       //Creo un objeto igual:
//       const nuevoProducto = new Carrito(target.id, target.nombre, target.cantidad + 1, target.precio, target.imagen);
//       carrito.push(nuevoProducto)
//       //Sino: 
//     } else {
//       carrito.push(productoCarrito);
//     }

//   }
//   localStorage.setItem('carrito', JSON.stringify(carrito));
//   listarCarrito(carrito)
// }




const handleSearch = (e) => {
    console.log(e.target.value);
    //Filtra la busqueda y convierte en minuscula
    const filtrados = productos.filter(producto => producto.nombre.toLocaleLowerCase().includes(e.target.value.toLowerCase()))

    dibujarProductos(filtrados, contenedor)
}

// if (localStorage.getItem('carrito')) {
//   carrito = JSON.parse(localStorage.getItem('carrito'));
//   listarCarrito(carrito)

// }

inputSearch.addEventListener('input', handleSearch)
