let {flashcard} = require('../data');

function listarFlashcardsPorBaralhoId() {
    flashcard.forEach((flash) => {
    const index = flash.filter(flash => flash.idBaralho === idBaralho);   
    console.log(`ID: ${flash.id} , Pergunta: ${flash.pergunta}, Resposta: ${flash.resposta}, ID do baralho: ${flash.idBaralho}`);
    });
};

    module.exports =    listarFlashcardsPorBaralhoId;