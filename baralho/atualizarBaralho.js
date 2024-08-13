let {baralhoLions} = require('../data');

function atualizarBaralho(id, novoTitulo){
    const index = baralhoLions.findIndex(baralho => baralho.id === id);
    if (index !== -1) {
        baralhoLions[index] = {id, ...novoTitulo};
    } else {
        console.log('Usuário não encontrado');
    };

    };

module.exports = atualizarBaralho;