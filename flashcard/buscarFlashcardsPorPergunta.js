let {flashcard} = require('../data');

function buscarFlashcardsPorPergunta(pergunta) {
    index = flashcard.filter(flashcards => flashcards.pergunta === pergunta)

    index.forEach(elemento => {
        console.log(`
        ID: ${elemento.id}, Pergunta: ${elemento.pergunta}, Resposta: ${elemento.resposta}
        `)
    });

}

module.exports = buscarFlashcardsPorPergunta;