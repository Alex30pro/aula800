let {baralhoLions} = require('../data');

function listarBaralhos() {
    baralhoLions.forEach((baralho) => {
    console.log(`ID: ${baralho.id} , Título: ${baralho.titulo}`);
    });

    };

    module.exports = listarBaralhos;