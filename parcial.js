"use strict";

/*
 * SANCHEZ, MARGOTH |
 */

/* 
Array productos:18
Funciones cargar contenido:271
carrito: 436
Modal carrito: 461
Local storage: 465
modal productos: 332
Modal pago: 602
Modal gracias:794
Modal metodo de pagoa: 835
Modal visa: 865
Filtros categoria:961
Banner temporal: 994
*/

// Array de productos
const productos = [
  {
    id: 1,
    nombre: "I believe in naps",
    descripcion: "Remera blanca para Soñadores de siestas y ovnis, ¡unidos!",
    extendida:
      "Porque, ¿quién no cree en el poder de una siesta intergaláctica? Esta remera gris está diseñada para aquellos que saben que la verdadera aventura comienza después de un buen descanso. Con la imagen de un alien (porque hasta los extraterrestres saben que las siestas son esenciales para conquistar el universo), esta prenda es perfecta para los soñadores de siestas y los exploradores del espacio. ¡Atrévete a ponerte esta remera y demuestra que en tu planeta, el descanso es tan importante como la exploración espacial!",
    precio: 15000,
    imagen: "img/remera-1.webp",
    categoria: "Remeras",
  },
  {
    id: 2,
    nombre: "On a Secret Mission",
    descripcion: "Gorra roja estilo misterioso para agentes intergalácticos.",
    extendida:
      "¿Te sientes como un agente intergaláctico en una misión secreta? Esta gorra roja con letras blancas es todo lo que necesitas para mantener tu identidad en secreto mientras exploras el universo. Con la imagen de un alien y una nave espacial, nadie sabrá si estás en una misión espacial o simplemente buscando el mejor lugar para relajarte. ¡Póntela y prepárate para tu próxima aventura estelar!",
    precio: 9000,
    imagen: "img/gorro-1.jpg",
    categoria: "Gorras",
  },
  {
    id: 3,
    nombre: "Alien Toes",
    descripcion: "Medias coloridas con estilo interestelar en cada paso.",
    extendida:
      "¡Tus pies nunca han estado tan listos para un viaje intergaláctico! Estas medias verde turquesa con letras beige y una invasión de aliens son la opción perfecta para quienes no temen dejar huellas de otro planeta. Con un toque extraterrestre en cada paso, tus pies se sienten como si estuvieran flotando en gravedad cero. No es un sueño, ¡son tus nuevos Alien Toes! ¡Ponlas y deja que el estilo se apodere de tu universo!",
    precio: 3500,
    imagen: "img/medias-1.webp",
    categoria: "Calcetines",
  },
  {
    id: 4,
    nombre: "Empacando para Marte",
    descripcion:
      "Mochila con estampado, lista para tu próxima aventura espacial.",
    extendida:
      "Prepárate para tu próxima aventura interplanetaria con esta mochila negra de estilo galáctico. Con letras beige que destacan y la imagen de un astronauta listo para despegar, esta mochila no solo tiene espacio para tus cosas, sino también para tus sueños de conquistar el espacio. 🌌🛸",
    precio: 20000,
    imagen: "img/mochila-1.webp",
    categoria: "Mochilas",
  },
  {
    id: 5,
    nombre: "Demasiado chill para este planeta",
    descripcion: "Remera negra porque tu estilo merece su propia órbita.",
    extendida:
      "Esta remera negra con un alien con anteojos oscuros es para los que mantienen la calma en cualquier galaxia. Perfecta para quienes prefieren un estilo relajado y fuera de este mundo. ¡Porque ser chill es un estilo de vida universal!",
    precio: 16000,
    imagen: "img/remera-2.webp",
    categoria: "Remeras",
  },
  {
    id: 6,
    nombre: "Galactic Ambassador",
    descripcion: "Gorra rosa: para un look de otro planeta.",
    extendida:
      "Prepárate para llevar tu estilo a nuevas galaxias con esta gorra rosa con letras rojas. Con un alien saludando desde su nave espacial, ¡te convertirás en el embajador galáctico de buen rollo! Ideal para aquellos que saben que ser cool no tiene fronteras, ni planetas. Póntela y deja que tu misión intergaláctica de estilo comience. ¡La galaxia te espera, embajador!",
    precio: 9500,
    imagen: "img/gorro-2.jpg",
    categoria: "Gorras",
  },
  {
    id: 7,
    nombre: "Martian Steps",
    descripcion: "Medias rosas y celestes para que camines como un marciano.",
    extendida:
      "¡Da pasos interplanetarios con estilo! Estas medias rosa y celeste son el toque perfecto para cualquier aventurero cósmico. Con un alien verde y un alien azul haciendo equipo en tus pies, sentirás que cada paso es una misión en el planeta Marte. Suave, cómoda y llena de personalidad, Martian Steps es todo lo que necesitas para conquistar el universo... ¡y tu armario! 🚀👽🌎",
    precio: 3800,
    imagen: "img/medias-2.png",
    categoria: "Calcetines",
  },
  {
    id: 8,
    nombre: "CosmoBag",
    descripcion:
      "Mochila negra que será tu compañero ideal para explorar mundos.",
    extendida:
      "Tu mochila galáctica está aquí. Con un diseño negro y un alien amigable en el frente, es perfecta para quienes tienen un espíritu aventurero, listos para explorar el cosmos o la ciudad. Con espacio para todos tus gadgets, esta mochila es más que un accesorio: es tu pasaporte a un universo lleno de estilo y misterio. Ideal para los que ven la Tierra como solo una parada en el camino hacia lo infinito. ",
    precio: 2500,
    imagen: "img/mochila-2.png",
    categoria: "Mochilas",
  },
  {
    id: 9,
    nombre: "Nerd de otro planeta",
    descripcion: "Remera negra: para genios que programan el universo.",
    extendida:
      "¿Quién dijo que ser un genio no puede tener estilo? Esta remera negra con un alien con anteojos de estudio y un libro es para los que están siempre un paso adelante en el conocimiento cósmico. ¡Porque en el espacio, hasta los nerds son de otro planeta!",
    precio: 16000,
    imagen: "img/remera-3.webp",
    categoria: "Remeras",
  },
  {
    id: 10,
    nombre: "AstroCap",
    descripcion:
      "Gorro celeste: para exploradores espaciales que necesitan sombra.",
    extendida:
      "¡Lleva el universo sobre tu cabeza! Esta gorra celeste con letras amarillas y una imagen de un alien viajero espacial te asegura que estarás listo para cualquier aventura cósmica. Con su nave espacial de fondo, estarás siempre preparado para explorar nuevos horizontes... o al menos, para destacar con estilo. ¡Con la AstroCap, el cielo ya no es el límite!",
    precio: 7900,
    imagen: "img/gorro-3.jpg",
    categoria: "Gorras",
  },
  {
    id: 11,
    nombre: "CosmoSocks",
    descripcion:
      "Medias blancas y rosas, suaves y cómodas con un toque de ciencia ficción.",
    extendida:
      "¡Para que tus pies viajen por todo el cosmos! Estas medias en rosa y blanco son la combinación perfecta de suavidad y estilo galáctico. Con un alien verde acompañándote en cada paso, sentirás que estás pisando las estrellas. ¡Cómodas, únicas y listas para acompañarte en tu próxima aventura espacial! 🚀👽🌟",
    precio: 2600,
    imagen: "img/medias-3.png",
    categoria: "Calcetines",
  },
  {
    id: 12,
    nombre: "AstroPack",
    descripcion: "Una mochila monstruo con diseño extraterrestre.",
    extendida:
      "¡Prepárate para un viaje intergaláctico con esta mochila única! Con un diseño en negro, verde y violeta, y un alien monstruoso en el frente, es todo lo que necesitas para destacarte en cualquier planeta. Ideal para aquellos que tienen un estilo fuera de este mundo y no temen mostrar su lado más extraterrestre. Con espacio suficiente para tus objetos más valiosos (¡o tus rayos láser!), esta mochila está lista para acompañarte a cualquier aventura cósmica.🚀👽   ",
    precio: 38000,
    imagen: "img/mochila-3.png",
    categoria: "Mochilas",
  },

  {
    id: 13,
    nombre: "I'm from space and you?",
    descripcion: "Remera blanca para Soñadores de siestas y ovnis, ¡unidos!",
    extendida:
      " Si sientes que tu estilo es de otro planeta, esta remera roja con un alien y el mensaje Im from space and you? es para ti.  ¡Porque ser del espacio es lo más cool y, además, siempre hay algo interesante de descubrir allá afuera! ¿Te atreves a unirte a la galaxia?",
    precio: 15000,
    imagen: "img/remera-4.jpg",
    categoria: "Remeras",
  },
  {
    id: 14,
    nombre: "Planet Earth Visiting ",
    descripcion:
      "Gorra celeste estilo misterioso para agentes intergalácticos.",
    extendida:
      "¡Bienvenido a la Tierra! Esta gorra celeste con letras amarillas es el toque perfecto para todo visitante intergaláctico. Con un alien volando en su nave espacial, esta gorra te invita a explorar el planeta con estilo. Ya sea que estés tomando un descanso en la Tierra o en misión secreta por el universo, la Planet Earth Visiting te acompaña con un toque cósmico y un mensaje claro: ¡los extraterrestres también necesitan vacaciones!",
    precio: 9000,
    imagen: "img/gorro-4.jpg",
    categoria: "Gorras",
  },
  {
    id: 15,
    nombre: "No me sigas!",
    descripcion: "Medias verdes con estilo interestelar en cada paso.",
    extendida:
      "Porque, ¡ni siquiera sé dónde voy! Estas medias en violeta y verde son perfectas para quienes prefieren caminar a su propio ritmo (aunque tal vez un alien verde se atreva a seguirte). Con un diseño único y divertido, son ideales para darle un toque cósmico y un poco misterioso a tu estilo. ¡Póntelas y sigue tu propio camino, pero no te sorprendas si encuentras alguna nave espacial en tu camino! 👽✨",
    precio: 3500,
    imagen: "img/medias-4.jpg",
    categoria: "Calcetines",
  },
  {
    id: 16,
    nombre: "Spaceship in Sight",
    descripcion:
      "Mochila con estampado, lista para tu próxima aventura espacial.",
    extendida:
      "¡Tu próxima misión intergaláctica comienza ahora! Con un diseño en verde, naranja y violeta y un alien monstruoso al frente, esta mochila es perfecta para quienes buscan combinar estilo y aventura en cada planeta que visiten. Ideal para los que están listos para despegar y explorar lo desconocido, con espacio suficiente para tus gadgets cósmicos, rayos láser y todo lo necesario para conquistar el universo. ¡Prepárate para ser el centro de atención, en la Tierra o más allá! 🚀👽",
    precio: 20000,
    imagen: "img/mochila-4.jpg",
    categoria: "Mochilas",
  },
  {
    id: 17,
    nombre: "Goodbye Earth, see you in another galaxy",
    descripcion: "Remera blanca para Soñadores de siestas y ovnis, ¡unidos!",
    extendida:
      "Si sientes que necesitas un cambio de escenario (y de planeta), esta remera blanca con un alien y la Tierra a punto de ser dejada atrás es tu compañera ideal. ¡Es hora de despedirse de la Tierra y comenzar la aventura en una galaxia lejana! Porque, ¿quién no querría explorar el universo con estilo? Prepárate para despegar y dejar el planeta en la estela de tu nave.",
    precio: 15000,
    imagen: "img/remera-5.jpg",
    categoria: "Remeras",
  },
  {
    id: 18,
    nombre: "No Gravity",
    descripcion: "Gorra verde estilo misterioso para agentes intergalácticos.",
    extendida:
      "¡Prepárate para flotar! Esta gorra celeste con letras amarillas te lleva más allá de la gravedad terrícola. Con un alien viajando en su nave espacial, es el accesorio ideal para los que prefieren romper las reglas de la física y explorar el universo sin limitaciones. ¿Estás listo para desafiar la gravedad? ¡Pon esta gorra y siente la libertad cósmica en cada vuelo!",
    precio: 9000,
    imagen: "img/gorro-5.jpg",
    categoria: "Gorras",
  },
  {
    id: 19,
    nombre: "Mi otra media es alienígena",
    descripcion: "Medias coloridas con estilo interestelar en cada paso.",
    extendida:
      "Porque no todo en el universo tiene que ser terrícola, ¡y tus pies lo saben! Estas medias violeta con aliens estampados y detalles en celeste y rojo son el toque perfecto para aquellos que se sienten un poco más allá de este planeta. Con un mensaje intergaláctico que deja claro que tu estilo no tiene límites, ¡serás la sensación de la galaxia! Ponte estas medias y deja que tu otro par te lleve a otro planeta. 🚀👽",
    precio: 3500,
    imagen: "img/medias-5.jpg",
    categoria: "Calcetines",
  },
  {
    id: 20,
    nombre: "Visitante en tierra",
    descripcion:
      "Mochila con estampado, lista para tu próxima aventura espacial.",
    extendida:
      "¡Prepárate para ser el visitante más cool de la Tierra con esta mochila! Con un diseño en negro y la imagen de nuestro planeta en la parte delantera, es ideal para quienes viajan desde las estrellas pero se sienten como en casa en la Tierra. 🌍👽 Un pequeño alien negro en la parte superior te recuerda que ser un visitante tiene su toque único. Con espacio suficiente para todo lo esencial de tu aventura, esta mochila te acompañará en cada exploración terrícola. ¡Haz que cada paso sea una nueva misión! 🚀🌟",
    precio: 20000,
    imagen: "img/mochila-5.jpg",
    categoria: "Mochilas",
  },

  {
    id: 21,
    nombre: "I’m still waiting my ship ",
    descripcion: "Remera blanca para Soñadores de siestas y ovnis, ¡unidos!",
    extendida:
      " Si te sientes como si estuvieras esperando tu nave espacial para escapar de la rutina terrestre, esta remera negra con tres aliens y una nave espacial de fondo es para ti. ¡No te preocupes, seguro que la nave está en camino! Mientras tanto, luce un estilo galáctico que hará que todos te pregunten si eres el capitán de tu propio destino interplanetario.",
    precio: 15000,
    imagen: "img/remera-6.jpg",
    categoria: "Remeras",
  },
  {
    id: 22,
    nombre: "Alienated",
    descripcion: "Gorra gris estilo misterioso para agentes intergalácticos",
    extendida:
      " ¡Prepárate para ser abducido por el estilo más galáctico! Esta gorra naranja con letras verdes es el look perfecto para quienes se sienten un poco… ¡alienados! Con un alien volando en su nave espacial, te transporta directamente a otro planeta donde las reglas de la moda las marca el universo. ¿Listo para un viaje intergaláctico? Ponte esta gorra y muestra al mundo tu lado más extraterrestre.",
    precio: 9000,
    imagen: "img/gorro-6.jpg",
    categoria: "Gorras",
  },
  {
    id: 23,
    nombre: "My Feet, My Rules ",
    descripcion: "Medias coloridas con estilo interestelar en cada paso.",
    extendida:
      "Porque cuando se trata de tus pies, ¡tú decides! Estas medias negras con detalles en verde y un alien súper cool te recordarán que nadie manda sobre tu estilo. Con un toque intergaláctico, son perfectas para aquellos que pisan fuerte, sin seguir las reglas del planeta Tierra. ¿Quién dijo que tus pies no pueden ser los más poderosos del universo? 🚀👽",
    precio: 3500,
    imagen: "img/medias-6.jpg",
    categoria: "Calcetines",
  },
  {
    id: 24,
    nombre: "¿UFO? No, yo soy el extraño.",
    descripcion:
      "Mochila con estampado, lista para tu próxima aventura espacial.",
    extendida:
      "¡Deja que tu estilo hable con esta mochila única! Con un diseño en negro y rosa, y un alien tierno al frente, es ideal para los que tienen un toque de misterio y un corazón extraterrestre. Con suficiente espacio para todo lo esencial y quizás algunos secretos alienígenas, esta mochila es perfecta para cualquier aventura terrícola o espacial. ¡Atrévete a ser el extraño con más estilo! 👽🌍",
    precio: 20000,
    imagen: "img/mochila-6.jpg",
    categoria: "Mochilas",
  },
];
// ------------------------- Funciones para carga de contenido -------------------------
function cargaContenido(
  etiquetaCreada, //etiqueta que se va a crear
  propiedadProducto, //texto que se va a agregar en la etiqueta
  container, //contenedor donde se va a agregar el nuevo elemento
  texto = "" //texto opcional que se agrega antes del contenido
) {
  const tituloProducto = document.createElement(etiquetaCreada);
  const textoTitulo = document.createTextNode(`${texto} ${propiedadProducto}`);
  tituloProducto.appendChild(textoTitulo);
  container.appendChild(tituloProducto);
}

// Función para mostrar productos en  DOM
function mostrarProductos(productos_seleccionados) {
  const contenedorProductos = document.querySelector("#productos");

  //itero sobre el array de productos y se ven en DOM
  productos_seleccionados.forEach((producto) => {
    // Creo elementos de producto
    const productoItem = document.createElement("li");
    productoItem.classList.add("item-productos");
    const infoContainer = document.createElement("div");

    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.imagen);
    imagen.setAttribute("alt", producto.nombre);
    imagen.classList.add("item-imagen");

    // Llamo a la funcion generada arriba, para cargar las etiquetas de nombre, descripcion, precio y categoria
    cargaContenido("h3", producto.nombre, infoContainer);
    cargaContenido("p", producto.descripcion, infoContainer, "Descripcion:");
    cargaContenido("p", producto.precio, infoContainer, "Precio: $");
    cargaContenido("p", producto.categoria, infoContainer, "Categoria:");

    // Botón para agregar el producto al carrito
    const botonAgregar = document.createElement("button");
    const textboton = document.createTextNode("Agregar al carrito");
    botonAgregar.appendChild(textboton);
    botonAgregar.classList.add("active");

    // Evento para agregar los productos al carrotp al hacer click en Agregar Carrito
    botonAgregar.addEventListener("click", () => {
      agregarProducto(producto);
      spanCarrito.textContent = `${cantidadProductos}`;
      window.scrollTo({
        // Esto hace un scroll para arriba cuando se agrega un producto, lo agregue por mejor usabilidad
        top: 0,
        behavior: "smooth",
      });
    });

    // Agrupo todos los appendChilds con variables de las etiquetas generadas anteriormente
    infoContainer.appendChild(botonAgregar);
    productoItem.appendChild(imagen);
    productoItem.appendChild(infoContainer);
    contenedorProductos.appendChild(productoItem);
    //console.log("Producto agregado al DOM:", producto.nombre);
  });

  /* ------------------------MODAL PRODUCTO DESCRIPCION------------------------------------------------- */
  // Evento carrito: Al hacer click se abre el modal con todos los productos seleccionnados
  const imagenesProductos = document.querySelectorAll(".item-imagen");
  imagenesProductos.forEach((imagenSeleccionada) => {
    imagenSeleccionada.addEventListener("click", () => {
      //crea la modal de cada producto
      const modalDescripcionProducto = document.createElement("dialog");
      modalDescripcionProducto.classList.add("modal");
      document.body.prepend(modalDescripcionProducto);

      //creo el contenido del carrito
      let contenedorProducto = document.createElement("div");
      contenedorProducto.classList.add("producto");

      //titulo del contenedor del carrito
      const tituloContenedorProducto = document.createElement("p");
      tituloContenedorProducto.classList.add("titulo-contenedor-carrito");
      tituloContenedorProducto.textContent = "Descripción producto";
      contenedorProducto.appendChild(tituloContenedorProducto);

      /* Busco el producto para saber que imagen coincide con el atributo src*/
      const producto = productos.find(
        (prod) => prod.imagen === imagenSeleccionada.getAttribute("src")
      );

      /* Valido si el producto existe */
      if (producto) {
        // Creo la imagen
        const imagenProducto = document.createElement("img");
        imagenProducto.classList.add("imagen-producto");
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.nombre;
        contenedorProducto.appendChild(imagenProducto);

        // Creo el nombre del producto en el modal de descripción
        const nombreProductoDescripcion = document.createElement("p");
        nombreProductoDescripcion.classList.add("nombre-producto");
        nombreProductoDescripcion.textContent = producto.nombre;
        contenedorProducto.appendChild(nombreProductoDescripcion);

        // Creo la categoria del producto en el modal de descripción
        const categoriaProductoDescripcion = document.createElement("p");
        categoriaProductoDescripcion.classList.add("categoria-producto");
        categoriaProductoDescripcion.textContent = producto.categoria;
        contenedorProducto.appendChild(categoriaProductoDescripcion);

        // Creo la descripción en el modal de descripción
        const descripcionProducto = document.createElement("p");
        descripcionProducto.classList.add("descripcion-producto-modal");
        descripcionProducto.textContent = producto.extendida;
        contenedorProducto.appendChild(descripcionProducto);

        // Creo el precio en el modal de descripción
        const precioProducto = document.createElement("p");
        precioProducto.classList.add("descripcion-producto");
        precioProducto.textContent = `$${producto.precio}`;
        contenedorProducto.appendChild(precioProducto);
      }

      //Footer del carrito con los botones de cerrar,vaciar y proceder al pago
      const footerCarrito = document.createElement("footer");
      const botonCerrar = document.createElement("button");
      botonCerrar.classList.add("boton-cerrar");
      botonCerrar.textContent = "Cerrar";

      const botonAgregarProducto = document.createElement("button");
      botonAgregarProducto.classList.add("boton-agregar");
      botonAgregarProducto.textContent = "Agregar al carrito";

      footerCarrito.append(botonCerrar, botonAgregarProducto);
      contenedorProducto.appendChild(footerCarrito);

      modalDescripcionProducto.appendChild(contenedorProducto);
      modalDescripcionProducto.showModal(); //muestra el modal

      const botonAgregarProductoSeleccionado =
        document.querySelector(".boton-agregar");

      //-------------------- Eventos Modal --------------------
      //Cerrar modal
      botonCerrar.addEventListener("click", () => {
        modalDescripcionProducto.close();
        modalDescripcionProducto.remove(); //elimina el modal del DOM
      });

      botonAgregarProductoSeleccionado.addEventListener("click", () => {
        const producto = productos.find(
          (producto) =>
            producto.imagen === imagenSeleccionada.getAttribute("src")
        );
        agregarProducto(producto);
        spanCarrito.textContent = `${cantidadProductos}`;
        window.scrollTo({
          // Esto hace un scroll para arriba cuando se agrega un producto, lo agregue por mejor usabilidad
          top: 0,
          behavior: "smooth",
        });
      });
    });
  });
}
//llamo a la funciin para que carguen todos los productos desde el array
mostrarProductos(productos);

// --------------------------- Carrito ---------------------------

//llamo al span que tiene el contador en el icono de carrito
const spanCarrito = document.querySelector(".item-contador-carrito");

// Variables para total y cantidad de productos
let total = 0; // precio total de los productos
let cantidadProductos = 0;
let items = []; // array donde se van a acumular todos los productos que se agreguen al carrito con el boton de agregado

// llamo a las clases del acumulador y del total de precio
const itemAgregado = document.querySelector(".item-agregado");
const itemPrecio = document.querySelector(".item-precio");

// Funcion que acumula la cantidad de productos, el precio total y hace el push a los productos seleccionados
const agregarProducto = (producto) => {
  cantidadProductos++;
  total += producto.precio;
  itemAgregado.textContent = cantidadProductos;
  itemPrecio.textContent = total;
  items.push(producto);
  guardarCarritoEnLocalStorage(); // Guarda el carrito actualizado
};

// --------------------------- Modal Carrito ---------------------------
// Función para guardar el carrito en Local Storage
function guardarCarritoEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(items)); // Convierte el array a JSON y lo guarda
  localStorage.setItem("cantidadProductos", JSON.stringify(cantidadProductos)); // Guarda la cantidad de productos
  localStorage.setItem("total", JSON.stringify(total)); // Guarda el total
}

//Selecciono el boton del carrito
const botonCarrito = document.querySelector(".boton-carrito");

// Evento carrito: Al hacer click se abre el modal con todos los productos seleccionnados
botonCarrito.addEventListener("click", () => {
  //crea la modal para mostrar el carrito
  const modalProducto = document.createElement("dialog");
  modalProducto.classList.add("modal");
  document.body.prepend(modalProducto);

  //creo el contenido del carrito
  const contenedorCarrito = document.createElement("div");
  contenedorCarrito.classList.add("carrito");

  //titulo del contenedor del carrito
  const tituloContenedorCarrito = document.createElement("p");
  tituloContenedorCarrito.classList.add("titulo-contenedor-carrito");
  tituloContenedorCarrito.textContent = "Carrito de compras";
  contenedorCarrito.appendChild(tituloContenedorCarrito);

  //Header del carrito con la cantidad de productos y el total
  const headerCarrito = document.createElement("header");
  const spanProductos = document.createElement("span");
  spanProductos.classList.add("span-productos");
  spanProductos.textContent = `Productos: ${items.length} `;

  // Creo las etiquetas con el total y precio de los productos del header
  const spanTotal = document.createElement("span");
  spanTotal.classList.add("span-total");
  spanTotal.textContent = `Total: $${total}`;
  headerCarrito.appendChild(spanProductos);
  headerCarrito.appendChild(spanTotal);
  contenedorCarrito.append(headerCarrito);

  //lista de productos en el carrito
  const listaProductosCarrito = document.createElement("ol");
  contenedorCarrito.appendChild(listaProductosCarrito);

  //Recorro los productos en el carrito para poder mostrarlos
  items.forEach((item) => {
    const itemCarrito = document.createElement("li");
    const textoProducto = document.createTextNode(
      `${item.categoria} - ${item.nombre} - Precio:$${item.precio}`
    ); // Use textNode para que aparezca la categoria, el nombre y el precio en la misma linea todo junto
    itemCarrito.appendChild(textoProducto);

    //funcion para eliminar un producto del carrito
    const eliminarProducto = (idProducto) => {
      const index = items.findIndex((item) => item.id === idProducto);
      if (index !== -1) {
        // el findIndex devuelve -1 cuando no encuentra el producto, por eso lo elimina solo si no es -1
        total -= items[index].precio; // le resto el precio de ese producto al total
        cantidadProductos--; // le descuento 1 a la cantidad de productos totales
        items.splice(index, 1); // splice elimina un producto del array
        itemAgregado.textContent = cantidadProductos; // ahora el itemagregado tiene la cantidad de productos actualizada
        itemPrecio.textContent = total; // idem precio
        guardarCarritoEnLocalStorage(); // Guarda el carrito actualizado
      }
    };

    //enlace para eliminar el producto
    const opcionEliminar = document.createElement("a");
    opcionEliminar.setAttribute("href", "a");
    opcionEliminar.classList.add("enlace-carrito");
    opcionEliminar.textContent = " Eliminar";
    opcionEliminar.addEventListener("click", (event) => {
      event.preventDefault();
      eliminarProducto(item.id); //Llamo a la funcion de eliminar para eliminar el producto seleccionado
      opcionEliminar.remove(); //Elimina el enlace
      modalProducto.close(); // cierro el modal para luego volver a abrirlo corregido
      botonCarrito.click(); // Hace click en el carrito para que se abra ahora con los productos eliminados
      spanCarrito.textContent = `${cantidadProductos}`; // actualiza el contador al lado del carrito
    });
    itemCarrito.appendChild(opcionEliminar);
    listaProductosCarrito.appendChild(itemCarrito); //Agrego el producto a la lista
  });

  //Footer del carrito con los botones de cerrar,vaciar y proceder al pago
  const footerCarrito = document.createElement("footer");
  const botonCerrar = document.createElement("button");
  botonCerrar.classList.add("boton-cerrar");
  botonCerrar.textContent = "Cerrar";

  const botonVaciar = document.createElement("button");
  botonVaciar.classList.add("boton-vaciar");
  botonVaciar.textContent = "Vaciar";
  /* ----boton pago---- */
  const botonPago = document.createElement("button");
  botonPago.classList.add("boton-pago");
  botonPago.textContent = "Proceder al pago";

  footerCarrito.append(botonCerrar, botonVaciar, botonPago);
  contenedorCarrito.appendChild(footerCarrito);

  modalProducto.appendChild(contenedorCarrito);
  modalProducto.showModal(); //muestra el modal

  //-------------------- Eventos Modal --------------------
  //Cerrar modal
  botonCerrar.addEventListener("click", () => {
    modalProducto.close();
    modalProducto.remove(); //elimina el modal del DOM
  });

  //vaciar el carrito
  botonVaciar.addEventListener("click", () => {
    items = []; //vacia el array de productos
    cantidadProductos = 0; //resetea la cantidad
    total = 0; //resetea el total
    itemAgregado.textContent = cantidadProductos;
    itemPrecio.textContent = total;
    spanProductos.textContent =
      spanTotal.textContent =
      listaProductosCarrito.textContent =
        ""; //limpia el contenido del carrito

    // Le creo un texto con un li para que le avise al usuario que el carrito se vacio
    const mensajeVacio = document.createElement("li");
    mensajeVacio.textContent = "El carrito está vacío";
    mensajeVacio.classList.add("mensaje-vacio");
    listaProductosCarrito.appendChild(mensajeVacio);
    spanCarrito.textContent = `${cantidadProductos}`; // Se actualiza el contador del carrito a 0
  });

  //Proceder al pago (Agregado para solo para que el boton tenga alguna funcionalidad que emule la realidad)
  botonPago.addEventListener("click", () => {
    modalProducto.close(); // Cierra el modal del carrito
    modalProducto.remove(); // Elimina el modal del carrito
    /*  mostrarModalPago(); // Abre el modal de pago */
  });
});
//-------------------- final modal prodcto--------------------

// --------------------------- Modal pago ---------------------------
// Función para crear y mostrar el modal de pago
function mostrarModalPago() {
  // Crear el modal
  const modalPago = document.createElement("dialog");
  modalPago.classList.add("modal");
  document.body.prepend(modalPago);

  /* Contenedor formulario */
  const contenedorFormulario = document.createElement("div");
  contenedorFormulario.classList.add("formulario-container");

  /* Título del formulario */
  const tituloFormulario = document.createElement("h3");

  tituloFormulario.textContent = "Formulario de Pago";
  contenedorFormulario.appendChild(tituloFormulario);

  /* Crear formulario */
  const formulario = document.createElement("form");
  formulario.classList.add("formulario-pago");

  /* Creo campos del formulario */
  // Nombre
  const inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.name = "nombre";
  inputNombre.placeholder = "Nombre completo";

  /* inputNombre.required = true; */
  // Parrafo error
  const errorNombre = document.createElement("p"); // Mensaje de error para nombre
  errorNombre.classList.add("error-mensaje");

  // Email
  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.name = "email";
  inputEmail.placeholder = "Correo electrónico";

  const errorEmail = document.createElement("p"); // Mensaje de error para email
  errorEmail.classList.add("error-mensaje");

  // Teléfono
  const inputTelefono = document.createElement("input");
  inputTelefono.type = "tel";
  inputTelefono.name = "telefono";
  inputTelefono.placeholder = "Número de teléfono";
  inputTelefono.pattern = "[0-9]{10}";
  inputTelefono.title = "Debe contener 10 dígitos numéricos.";
  inputTelefono.pattern = "[0-9]{10}";
  inputTelefono.title = "Debe contener 10 dígitos numéricos.";

  const errorTelefono = document.createElement("p"); // Mensaje de error para teléfono
  errorTelefono.classList.add("error-mensaje");

  // Dirección
  const inputDireccion = document.createElement("input");
  inputDireccion.type = "text";
  inputDireccion.name = "direccion";
  inputDireccion.placeholder = "Dirección de envío";

  const errorDireccion = document.createElement("p"); // Mensaje de error para dirección
  errorDireccion.classList.add("error-mensaje");

  // Fecha de entrega
  const inputFechaEntrega = document.createElement("input");
  inputFechaEntrega.type = "date"; //
  inputFechaEntrega.name = "fecha-entrega";
  inputFechaEntrega.placeholder = "Fecha de entrega";

  const errorFechaEntrega = document.createElement("p"); // Mensaje de error para fecha de entrega
  errorFechaEntrega.classList.add("error-mensaje");

  /* Botón de enviar */
  const botonEnviarPago = document.createElement("button");
  botonEnviarPago.type = "submit";
  botonEnviarPago.textContent = "Realizar Pago";
  botonEnviarPago.classList.add("boton-enviar-pago");

  // Método de pago (Select)
  const metodoPagoTitulo = document.createElement("h4");
  metodoPagoTitulo.textContent = "Método de Pago";

  const selectMetodoPago = document.createElement("select");
  selectMetodoPago.name = "metodo-pago";

  const opcionEfectivo = document.createElement("option");
  opcionEfectivo.value = "efectivo";
  opcionEfectivo.textContent = "Efectivo";

  const opcionTransferencia = document.createElement("option");
  opcionTransferencia.value = "transferencia";
  opcionTransferencia.textContent = "Transferencia";
  selectMetodoPago.append(opcionEfectivo, opcionTransferencia);

  /* Validaciones input */

  /* Agrego los campos al formulario */
  formulario.append(
    inputNombre,
    errorNombre,
    inputEmail,
    errorEmail,
    inputTelefono,
    errorTelefono,
    inputDireccion,
    errorDireccion,
    inputFechaEntrega,
    errorFechaEntrega,
    botonEnviarPago,
    metodoPagoTitulo,
    selectMetodoPago,
    botonEnviarPago
  );
  contenedorFormulario.appendChild(formulario);

  // Footer del modal con botón de cerrar
  const footerModal = document.createElement("footer");
  footerModal.classList.add("footer-modal");

  const botonCerrar = document.createElement("button");
  botonCerrar.classList.add("boton-cerrar-pago");
  botonCerrar.textContent = "Cerrar";
  footerModal.appendChild(botonCerrar);

  /* Agrego todo al modal */
  modalPago.append(contenedorFormulario, footerModal);

  // Mostrar el modal
  modalPago.showModal();

  /* Eventos del modal */
  botonCerrar.addEventListener("click", () => {
    modalPago.close();
    modalPago.remove(); // Elimina el modal del DOM
  });

  formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Limpiar mensajes de error previos
    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorTelefono.textContent = "";
    errorDireccion.textContent = "";
    errorFechaEntrega.textContent = "";

    let esValido = true; // Bandera para validar todos los campos

    // Validar campos del formulario
    if (inputNombre.value.trim() === "") {
      errorNombre.textContent = "Debes completar este campo: Nombre";
      esValido = false;
    }
    if (inputEmail.value.trim() === "") {
      errorEmail.textContent = "Debes completar este campo: nombre@gmail.com";
      esValido = false;
    }
    if (inputTelefono.value.trim() === "") {
      errorTelefono.textContent =
        "Debes completar este campo: Debe contener 10 dígitos";
      esValido = false;
    }
    if (inputDireccion.value.trim() === "") {
      errorDireccion.textContent =
        "Debes completar este campo: Dirección de envío";
      esValido = false;
    }
    if (inputFechaEntrega.value.trim() === "") {
      errorFechaEntrega.textContent =
        "Debes completar este campo: Fecha de entrega";
      esValido = false;
    }

    // Si todos los campos son válidos, procesar el pago
    if (esValido) {
      const metodoSeleccionado = selectMetodoPago.value;

      if (metodoSeleccionado === "efectivo") {
        mostrarModalGracias(); // Mostrar modal de agradecimiento
      } else if (metodoSeleccionado === "transferencia") {
        mostrarOpcionesTransferencia(); // Mostrar opciones de transferencia
      }

      modalPago.close();
      modalPago.remove(); // Elimina el modal después de procesar
    }
  });
}

// --------------------------- Modal gracias por la compra ---------------------------

// Función para mostrar el modal de agradecimiento
function mostrarModalGracias() {
  //cierro y elimino el modal anterior si existe
  const modalform = document.querySelector(".modal");
  modalform.close();
  modalform.remove();

  //Creo el modal de gracias
  const modalGracias = document.createElement("dialog");
  modalGracias.classList.add("modal");
  modalGracias.textContent = "¡Muchas gracias por tu compra!";
  document.body.prepend(modalGracias);

  const botonCerrar = document.createElement("button");
  botonCerrar.textContent = "Cerrar";
  botonCerrar.addEventListener("click", () => {
    modalGracias.close();
    modalGracias.remove();
  });

  items = []; //vacia el array de productos
  cantidadProductos = 0; //resetea la cantidad
  total = 0; //resetea el total
  itemAgregado.textContent = cantidadProductos;
  itemPrecio.textContent = total;

  // Actualizar el contador del carrito (icono)
  const spanProductoBorrar = document.querySelector(".item-contador-carrito");
  if (spanProductoBorrar) {
    spanProductoBorrar.textContent = "0"; // Resetea el contador del carrito
  }
  const listaProductosCarrito = document.querySelector("ol");
  if (listaProductosCarrito) {
    listaProductosCarrito.replaceChildren(); // Limpia todos los hijos del elemento
  }
  modalGracias.appendChild(botonCerrar);
  modalGracias.showModal();
}
// --------------------------- Modal metodo de pago---------------------------
// Función para mostrar opciones de transferencia
function mostrarOpcionesTransferencia() {
  const modalTransferencia = document.createElement("dialog");
  modalTransferencia.classList.add("modal");
  document.body.prepend(modalTransferencia);

  const titulo = document.createElement("h3");
  titulo.textContent = "Seleccione su opción de transferencia";

  const botonVisa = document.createElement("button");
  botonVisa.textContent = "Visa";
  botonVisa.addEventListener("click", () => {
    modalTransferencia.close();
    mostrarFormularioVisa(); // Muestra formulario para Visa
  });

  const botonMercadoPago = document.createElement("button");
  botonMercadoPago.textContent = "Mercado Pago";
  botonMercadoPago.addEventListener("click", () => {
    window.location.href = "https://www.mercadopago.com.ar/"; // Redirigir a Mercado Pago
  });

  modalTransferencia.append(titulo, botonVisa, botonMercadoPago);
  modalTransferencia.showModal();
}

// --------------------------- Modal visa---------------------------

// Modal y Función para mostrar formulario de Visa
function mostrarFormularioVisa() {
  const modalVisa = document.createElement("dialog");
  modalVisa.classList.add("modal");
  document.body.prepend(modalVisa);

  const titulo = document.createElement("h3");
  titulo.textContent = "Ingrese los datos de su tarjeta Visa";

  // Campo Número de Tarjeta
  const inputTarjeta = document.createElement("input");
  inputTarjeta.type = "text";
  inputTarjeta.placeholder = "Número de tarjeta";

  const errorTarjeta = document.createElement("p"); // Mensaje de error para número de tarjeta
  errorTarjeta.classList.add("error-mensaje");

  // Campo Fecha de Vencimiento
  const inputFechaVencimiento = document.createElement("input");
  inputFechaVencimiento.type = "date";
  inputFechaVencimiento.placeholder = "Fecha de vencimiento (MM/AA)";

  const errorFechaVencimiento = document.createElement("p"); // Mensaje de error para fecha de vencimiento
  errorFechaVencimiento.classList.add("error-mensaje");

  // Botón Confirmar
  const botonConfirmar = document.createElement("button");
  botonConfirmar.textContent = "Confirmar";
  botonConfirmar.addEventListener("click", () => {
    // Limpiar mensajes de error previos
    errorTarjeta.textContent = "";
    errorFechaVencimiento.textContent = "";

    let esValido = true; // Bandera para validar todos los campos

    // Validar Número de Tarjeta
    if (inputTarjeta.value.trim() === "") {
      errorTarjeta.textContent =
        "Debes completar este campo: Número de tarjeta 16 digitos";
      esValido = false;
    } else if (!/^\d{16}$/.test(inputTarjeta.value.trim())) {
      // Validar que sean exactamente 16 dígitos numéricos
      errorTarjeta.textContent =
        "El número de tarjeta debe contener 16 dígitos numéricos.";
      esValido = false;
    }

    // Validar Fecha de Vencimiento
    if (inputFechaVencimiento.value.trim() === "") {
      errorFechaVencimiento.textContent =
        "Debes completar este campo: Fecha de vencimiento";
      esValido = false;
    }

    // Si todos los campos son válidos, cerrar el modal y mostrar agradecimiento
    if (esValido) {
      modalVisa.close();
      mostrarModalGracias(); // Mostrar modal de agradecimiento
    }
  });

  // Botón para cerrar el modal
  const botonCerrar = document.createElement("button");
  botonCerrar.textContent = "Cerrar";
  botonCerrar.style.marginTop = "10px"; // Espaciado superior para separar del resto
  botonCerrar.addEventListener("click", () => {
    modalVisa.close();
    modalVisa.remove(); // Elimina el modal del DOM
  });

  // Agregar elementos al modal
  modalVisa.append(
    titulo,
    inputTarjeta,
    errorTarjeta,
    inputFechaVencimiento,
    errorFechaVencimiento,
    botonConfirmar,
    botonCerrar
  );

  // Mostrar el modal
  modalVisa.showModal();
}
// --------------------------- Integración con el botón "Proceder al pago" ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el botón "Proceder al pago" dentro del modal del carrito
  document.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("boton-pago")) {
      event.preventDefault(); // Evita cualquier acción predeterminada del botón
      mostrarModalPago(); // Llama a la función para abrir el modal
    }
  });
});

//----------------------------------------------Filtros categoria------------------------------------
// Referencias al select y al contenedor de productos
const filtroCategoria = document.getElementById("filtroCategoria");
const contenedorProductos = document.querySelector("#productos");

// Función para limpiar el contenedor de productos (borra todos los productos)
function limpiarProductos() {
  while (contenedorProductos.firstChild) {
    contenedorProductos.removeChild(contenedorProductos.firstChild);
  }
}
// Función para mostrar productos filtrados por categoría
function filtrarProductos(categoria) {
  limpiarProductos(); // elimina los productos existentes

  const productosFiltrados =
    categoria === "todo"
      ? productos
      : productos.filter(
          (producto) => producto.categoria.toLowerCase() === categoria
        );

  mostrarProductos(productosFiltrados);
  cardCarrito = document.querySelectorAll(".item-imagen");
}

// Evento para el select
filtroCategoria.addEventListener("change", (event) => {
  const categoriaSeleccionada = event.target.value.toLowerCase();
  filtrarProductos(categoriaSeleccionada);
});

/* BANNER TEMPORAL*/
// Referencia al select de categorías y al div de ofertas
const filtCategoria = document.getElementById("filtroCategoria");
const ofertasDiv = document.getElementById("ofertas");

// Función para mostrar el banner modal
function mostrarBanner() {
  // Crear el overlay para bloquear interacciones
  const overlay = document.createElement("div");
  overlay.classList.add("overlay-bloqueo");
  document.body.appendChild(overlay);

  // Crear el modal
  const modal = document.createElement("div");
  modal.classList.add("modal-banner");

  // Crear la imagen y añadirla al modal
  const imagen = document.createElement("img");
  imagen.src = "img/promo-15-descuento.png";
  imagen.alt = "15% de descuento en tu compra";
  modal.appendChild(imagen);

  // Añadir el modal al div de ofertas
  ofertasDiv.appendChild(modal);

  // Remover el modal después de 10 segundos y aplicar overlay para que no se pueda hacer nada hasta que desparezca el modal
  setTimeout(() => {
    modal.remove();
    overlay.remove();
  }, 10000);
}

// Evento al cambiar de categoría
filtCategoria.addEventListener("change", () => {
  mostrarBanner();
});
