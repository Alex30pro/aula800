let {flashcard} = require('../data');

function listarFlashcardsPorBaralhoId(idBaralho) {
    let filtro = flashcard.filter(verificar => verificar.id == idBaralho)

        filtro.forEach(flashcards => 
            console.log(`
            ID: ${flashcards.id} -Pergunta: ${flashcards.pergunta} -Resposta: ${flashcards.resposta}
            `)
        )
}

    module.exports = listarFlashcardsPorBaralhoId;