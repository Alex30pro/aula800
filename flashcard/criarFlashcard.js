let {flashcard} = require('../data');

function criarFlashcard(card) {
    card.id = flashcard.length + 1;
    flashcard.push(card);
}

module.exports = criarFlashcard;