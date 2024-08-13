let {flashcard} = require('../data');

function listarFlashcard() {
    flashcard.forEach((flash) => {
    console.log(`ID: ${flash.id} , Pergunta: ${flash.pergunta}, Resposta: ${flash.resposta}, ID do baralho: ${flash.idBaralho}`);
    });
};

    module.exports = listarFlashcard;