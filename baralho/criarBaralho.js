let {baralhoLions} = require('../data');

function criarBaralho(baralho) {
    baralho.id = baralhoLions.length + 1;
    baralhoLions.push(baralho);
}

module.exports = criarBaralho;