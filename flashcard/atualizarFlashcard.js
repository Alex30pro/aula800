let {flashcard} = require('../data');

function atualizarFlashcard(id, novoCard){
    const index = flashcard.findIndex(flash => flash.id === id);
    if (index !== -1) {
        flashcard[index] = {id, ...novoCard};
    } else {
        console.log('Usuário não encontrado');
    };

    };

module.exports = atualizarFlashcard;