// Importar el módulo creado (datosBici.js)
const parsearBicis = require("./datosBici");

const dhBici = {
  bicicletas: parsearBicis(),

 buscarBici(id) {
  const bici = this.bicicletas.filter((b) => b.id === id);
  return bici.length > 0 ? bici[0] : null; // Retorna la bicicleta encontrada o null
},
venderBici(id) {
  const bici = this.buscarBici(id); // Usa buscarBici para encontrar la bicicleta
  if (bici) {
    bici.vendido = true; // Cambia el estado a "vendido"
    return bici; // Devuelve la bicicleta con su estado actualizado
  } else {
    return "Bicicleta no encontrada";
  }
},
biciParaLaVenta() {
  return this.bicicletas.filter((b) => !b.vendido); // Filtra las bicicletas no vendidas
},
totalDeVentas() {
  return this.bicicletas
    .filter((b) => b.vendido) // Filtra las bicicletas vendidas
    .reduce((total, bici) => total + bici.precio, 0); // Suma los precios de las vendidas
},
aumentoBici(porcentaje) {
    return this.bicicletas.map((b) => {
      const nuevaBici = { ...b }; // Crea una copia de la bicicleta
      nuevaBici.precio += (nuevaBici.precio * porcentaje) / 100; // Aumenta el precio
      return nuevaBici; // Retorna la bicicleta con el precio actualizado
    });
  },

  // 2. Función biciPorRodado()
  biciPorRodado(rodado) {
    return this.bicicletas.filter((b) => b.rodado === rodado);
  },

  // 3. Función listarTodasLasBici()
  listarTodasLasBici() {
    console.log("Listado de todas las bicicletas registradas:");
    // Usando forEach
    this.bicicletas.forEach((bici) => {
      console.log(`ID: ${bici.id} - Marca: ${bici.marca} - Modelo: ${bici.modelo}`);
    });

    console.log("\nUsando for...of:");
    // Usando for...of
    for (const bici of this.bicicletas) {
      console.log(`ID: ${bici.id} - Marca: ${bici.marca} - Modelo: ${bici.modelo}`);
    }
  },
};


// Comprobación de funcionalidades con console.log()

// 1. Buscar una bicicleta por ID
console.log("Buscar bicicleta con ID 1:", dhBici.buscarBici(1));
console.log("Buscar bicicleta con ID 20:", dhBici.buscarBici(20)); // Caso no encontrado

// 2. Vender una bicicleta por ID
console.log("Vender bicicleta con ID 2:", dhBici.venderBici(2));
console.log("Vender bicicleta con ID 20:", dhBici.venderBici(20)); // Caso no encontrado

// 3. Listar bicicletas disponibles para la venta
console.log("Bicicletas disponibles para la venta:", dhBici.biciParaLaVenta());

// 4. Calcular el total de ventas realizadas
console.log("Total de ventas realizadas:", dhBici.totalDeVentas());

//Extras 
// 1. Aumento de precio en un 10%
const bicicletasConAumento = dhBici.aumentoBici(10);
console.log("Bicicletas con aumento del 10% en precio:", bicicletasConAumento);

// 2. Bicicletas por rodado
const bicicletasRodado28 = dhBici.biciPorRodado(28);
console.log("Bicicletas con rodado 28:", bicicletasRodado28);

// 3. Listar todas las bicicletas
dhBici.listarTodasLasBici();
