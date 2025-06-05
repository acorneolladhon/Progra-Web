let productos = [
  {
    id: 1,
    nombre: "Zapatillas Asics Netburner Ballistic FF3 std (cool grey)",
    categoria: "zapatillas",
    precio: 254990,
    imagen: "https://voleyotros.com.ar/wp-content/uploads/2024/09/ballistic-ff3-woman-cool-grey-1-1.jpg",
    talles: ["35", "36", "37", "38", "39", "40", "41"]
  },
  {
    id: 2,
    nombre: "Zapatillas Asics Gel Netburner Ballistic FF3 std (BLACK/PINKGLO)",
    categoria: "zapatillas",
    precio: 254990,
    imagen: "https://voleyotros.com.ar/wp-content/uploads/2025/02/asics-ballistic-pinkglo-1.jpg",
    talles: ["35", "36", "37", "38", "39", "40", "41"]
    },
  {
    id: 3,
    nombre: "Bota PEAK Taichi Flash 4.0",
    categoria: "zapatillas",
    precio: 159999,
    imagen: "https://voleyotros.com.ar/wp-content/uploads/2025/04/Peak_flash_4_ceramic_1.jpg",
    talles: ["38", "39", "40", "41","42"]
  },
  {
    id: 4,
    nombre: "Zapatillas Asics Gel Upcourt 6 (Black-Papaya)",
    categoria: "zapatillas",
    precio: 199990,
    imagen: "https://voleyotros.com.ar/wp-content/uploads/2025/03/upcourt-6-papaya-1.jpg",
    talles: ["35", "36", "37", "38", "39", "40", "41"]
    },
  {
    id: 5,
    nombre: "Zapatillas Asics Sky Elite PARIS 2024 FF3 MT",
    categoria: "zapatillas",
    precio: 299999,
    imagen: "https://voleyotros.com.ar/wp-content/uploads/2024/12/sky-elite-paris-1.jpg",
    talles: ["35", "36", "37", "38", "39", "40", "41"]
  },
  {
    id: 6,
    nombre: "Zapatillas Asics Gel Dedicate 8 (Light blue)",
    categoria: "zapatillas",
    precio: 159999,
    imagen: "https://voleyotros.com.ar/wp-content/uploads/2025/05/Imagen-de-WhatsApp-2025-05-24-a-las-11.01.07_73f587a1.jpg",
    talles: ["35", "36", "37", "38", "39", "40", "41"]
    },
  {
    id: 7,
    nombre: "Zapatillas Adidas Novaflight Indoor",
    categoria: "zapatillas",
    precio: 149999,
    imagen: "https://voleyotros.com.ar/wp-content/uploads/2025/02/ID3667_0.jpg",
    talles: ["35", "36", "37", "38", "39", "40", "41"]
  },
  {
    id: 8,
    nombre: "Zapatillas NIKE HYPERSET 2. Específicas de VOLEY",
    categoria: "zapatillas",
    precio: 262999,
    imagen: "https://voleyotros.com.ar/wp-content/uploads/2025/01/hyperset-1.jpg",
    talles: ["35", "36", "37", "38", "39", "40", "41"]
    },
  {
    id: 9,
    nombre: "Zapatillas Asics Gel Game9 CLAY/OC (Mint/BlueExpanse)",
    categoria: "zapatillas",
    precio: 189990,
    imagen: "https://voleyotros.com.ar/wp-content/uploads/2025/03/GEL-GAME.jpg",
    talles: ["35", "36", "37", "38", "39", "40", "41"]
  },
  {
    id: 10,
    nombre: "Zapatillas Asics Gel Rebound 2 (Vintage indigo)",
    categoria: "zapatillas",
    precio: 108999,
    imagen: "https://voleyotros.com.ar/wp-content/uploads/2025/05/Imagen-de-WhatsApp-2025-05-24-a-las-10.46.01_47b38177-1024x1024.jpg",
    talles: ["35", "36", "37", "38", "39", "40", "41"]
   },


    
];



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function renderizarProductos(lista) {
  const cont = document.getElementById("productos-container");
  cont.innerHTML = "";
  lista.forEach(p => {
    cont.innerHTML += `
      <div class="card" onclick="verDetalle(${p.id})">
        <img src="${p.imagen}" alt="${p.nombre}" />
        <h4>${p.nombre}</h4>
        <p>$${p.precio.toLocaleString("es-AR")}</p>
      </div>
    `;
  });
}

function verDetalle(id) {
  const producto = productos.find(p => p.id === id);
  const cont = document.getElementById("detalle-container");

  const opcionesTalle = producto.talles
    .map(t => `<option value="${t}">${t}</option>`)
    .join("");

  // Ocultar todo lo demás
  document.getElementById("catalogo").style.display = "none";
  document.getElementById("carrito").style.display = "none";
  document.getElementById("contacto").style.display = "none";
  document.getElementById("hero").style.display = "none";
  document.getElementById("sobre-nosotros").style.display = "none";
  document.getElementById("detalle-producto").style.display = "block";

  cont.innerHTML = `
    <div class="detalle-card">
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h2>${producto.nombre}</h2>
      <p>$${producto.precio.toLocaleString("es-AR")}</p>
      <label>Talle:
        <select id="talle">
          ${opcionesTalle}
        </select>
      </label>
      <label>Cantidad:
        <input type="number" id="cantidad" value="1" min="1">
      </label>
      <button onclick="agregarAlCarritoDesdeDetalle(${producto.id})">Agregar al carrito</button>
      <button onclick="volverACatalogo()">Volver</button>
    </div>
  `;
}




function agregarAlCarritoDesdeDetalle(id) {
  const producto = productos.find(p => p.id === id);
  const talle = document.getElementById("talle").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);

  carrito.push({ ...producto, talle, cantidad });
  renderizarCarrito();
  alert("Producto agregado al carrito.");
}


function volverACatalogo() {
  document.getElementById("detalle-producto").style.display = "none";
  document.getElementById("catalogo").style.display = "block";
  document.getElementById("carrito").style.display = "block";
  document.getElementById("contacto").style.display = "block";
  document.getElementById("hero").style.display = "block";
  document.getElementById("sobre-nosotros").style.display = "block";
}





function renderizarCarrito() {
  const cont = document.getElementById("carrito-container");
  cont.innerHTML = "";
  carrito.forEach(p => {
    cont.innerHTML += `<div>${p.nombre} - $${p.precio}</div>`;
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function editarProducto(id) {
  const p = productos.find(p => p.id === id);
  const nombreNuevo = prompt("Nuevo nombre", p.nombre);
  const precioNuevo = prompt("Nuevo precio", p.precio);
  if (nombreNuevo && precioNuevo) {
    p.nombre = nombreNuevo;
    p.precio = parseFloat(precioNuevo);
    renderizarProductos(productos);
  }
}

function eliminarProducto(id) {
  productos = productos.filter(p => p.id !== id);
  renderizarProductos(productos);
}

function agregarAlCarrito(id) {
  const p = productos.find(p => p.id === id);
  carrito.push(p);
  renderizarCarrito();
}

document.getElementById("vaciar-carrito").addEventListener("click", () => {
  carrito = [];
  renderizarCarrito();
});

document.getElementById("finalizar-compra").addEventListener("click", () => {
  alert("Gracias por tu compra!");
  carrito = [];
  renderizarCarrito();
});

renderizarProductos(productos);
renderizarCarrito();
