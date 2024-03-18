const botones = document.querySelectorAll(".card .btn");
const carrito = document.querySelector("#carrito");
const template = document.querySelector("#tCarrito");
const fragment = new DocumentFragment();

//objeto o arreglo del carrito
const carritoArr = [];
const carritoObj = {};

//funciono paara agrgar elementos
const agregar = (e) => {
  //console.log(e.target.dataset.fruta);

  productoObj = {
    id: e.target.dataset.fruta,
    nombre: e.target.dataset.fruta,
    cantidad: 1,
  };

  //aumentar a cantidad
  if (carritoObj.hasOwnProperty(productoObj.nombre)) {
    productoObj.cantidad = carritoObj[productoObj.nombre].cantidad + 1;
  }

  //empujar cada producto en el carrito
  carritoObj[productoObj.nombre] = productoObj;
  //console.log(carritoObj);

  mostrarProductos(productoObj);
  //productoObj no es necesario enviarlo
};

//recorrer botones -- mas adelante delegar eventos
//botones.forEach((btn) => console.log(btn))
botones.forEach((btn) => {
  //console.log(btn);
  btn.addEventListener("click", agregar);
});

const mostrarProductos = (productoObj) => {
  //productoObj no es necesario
  //console.log(productoObj);

  //carrito que inicie vacio
  carrito.textContent = "";

  //convertir en array el objeto, y reccorerglo
  Object.values(carritoObj).forEach((item) => {
    //clonar el template
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.nombre;
    clone.querySelector(".bagde").textContent = item.cantidad;

    fragment.appendChild(clone);
  });
  //termina el ciclo - reflow
  carrito.appendChild(fragment);
};
