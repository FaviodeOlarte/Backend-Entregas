class ProdctManager {
  constructor() {
    this.products = [];
  }

  getProductos() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const productId = this.products.length + 1;
    const producto = {
      id: productId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    const busquedaCode = this.products.find(
      (producto) => producto.code === code
    );
    if (busquedaCode) {
      console.log("Producto ya existente con el mismo CODE");
      return;
    }

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log(
        "Alguno de las caracteristicas del producto se encuentran vacias"
      );
      return;
    }

    this.products.push(producto);
  }

  getProductById(productoID) {
    const productoEncontrado = this.products.find(
      (producto) => producto.id === productoID
    );
    if (!productoEncontrado) {
      console.log("Not found");
      return;
    }
    return productoEncontrado;
  }
}

const productManager = new ProdctManager();

// agregar productos

productManager.addProduct(
  "Campera",
  "Campera polar",
  1500,
  "./rutalocal",
  123450,
  50
);
productManager.addProduct(
  "Campera Gris",
  "Campera polar",
  1700,
  "./rutalocal",
  123451,
  52
);
productManager.addProduct(
  "Pantalon",
  "Pantalon polar",
  700,
  "./rutalocal",
  123452,
  30
);

// -------------------------TEST------------------------

// obtener productos
const productosObtenidos = productManager.getProductos();
console.log("Eventos : ", productosObtenidos);

// buscar por ID

const busquedaPorID = productManager.getProductById(2);
console.log("Producto buscado por ID: ", busquedaPorID);
