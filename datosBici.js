const fs = require('fs');

function parsearBicis() {
    const bicis = fs.readFileSync('./bicicletas.json', 'utf-8');
    return JSON.parse(bicis);
  }
  
  module.exports = parsearBicis;