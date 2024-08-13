let {baralhoLions} = require('../data');

function deletarBaralho(index, id) {
    if (index !== -1) {
        baralhoLions[index] = {id, ...baralhoLions};
        baralhoLions.splice(index, 1);
    } else {
        console.log('Usuário não encontrado');
    };
 };

module.exports = deletarBaralho; 