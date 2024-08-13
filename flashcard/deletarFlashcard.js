let {flashcard} = require('../data');

function deletarFlashcard(index, id) {
    if (index !== -1) {
        flashcard[index] = {id, ...flashcard};
        flashcard.splice(index, 1);
    } else {
        console.log('Usuário não encontrado');
    };
 };

module.exports = deletarFlashcard; 