const prompt = require('prompt-sync')();

const criarBaralho = require('./baralho/criarBaralho');
const listarBaralhos = require('./baralho/listarBaralhos');
const atualizarBaralho = require('./baralho/atualizarBaralho');
const deletarBaralho = require('./baralho/deletarBaralho');

const criarFlashcard = require('./flashcard/criarFlashcard');
const listarFlashcard = require('./flashcard/listarFlashcards');
const listarFlashcardPorBaralhoId = require('./flashcard/listarFlashcardsPorBaralhoId');
const atualizarFlashcard = require('./flashcard/atualizarFlashcard');
const deletarFlashcard = require('./flashcard/deletarFlashcard');
const buscarFlashcardsPorBaralho = require('./flashcard/buscarFlashcardsPorBaralho');
const buscarFlashcardsPorPergunta = require('./flashcard/buscarFlashcardsPorPergunta');
const findFlashcardIndexByld = require('./flashcard/findFlashcardIndexById')

mainMenu()

function mainMenu(){
    console.log(`
    "Menu de intereção"
    1. Criar Baralho
    2. Criar Flashcard
    3. Listar Baralhos
    4. Listar Flashcards
    5. Listar Flashcards por Baralho
    6. Atualizar Baralho
    7. Atualizar Flashcard
    8. Deletar Baralho
    9. Deletar Flashcard
    10. Buscar Flashcards por Pergunta
    0. Sair
    `)
    
    const opcao = prompt('Digite o número que deseja interagir com o menu: ');

    let index

    switch(opcao){
        case '1':
            const titulo = prompt('Digite o título do baralho: ');
            criarBaralho({titulo});
            console.log('Baralho adicionado com sucesso!');
            mainMenu();
            break;
        case '2':
            const pergunta = prompt('Digite a pergunta do flashcard: ');
            const resposta = prompt('Qual a resposta do flashcard: ');
            criarFlashcard({pergunta, resposta});
            console.log('Flashcard adicionado com sucesso!');
            mainMenu();
            break;
        case '3':
            listarBaralhos();
            mainMenu();
            break; 
        case '4':
            listarFlashcard();
            mainMenu();
            break;
        case '5':
            id = prompt('Digite o número do id do flashcard que deseja procurar: ');
            listarFlashcardPorBaralhoId(id)
            mainMenu();
            break;
        case '6':
            listarBaralhos();
            index = parseInt(prompt('Número do ID do baralho que deseja atualizar: '));
            const novoTitulo = prompt('Digite o novo título do baralho que deseja atualizar: ');
            atualizarBaralho(index, {titulo: novoTitulo});
            console.log('Baralho atualizado com sucesso!');
            mainMenu();
            break;
        case '7': 
            listarFlashcard();
            index = parseInt(prompt('Número do ID do flashcard que deseja atualizar: '));
            const novaPergunta = prompt('Digite a nova pergunta do flashcard: ');
            const novaResposta = prompt('Digite a nova resposta do flashcard: ');
            atualizarFlashcard(index, {pergunta: novaPergunta, resposta: novaResposta});
            console.log('flashcard atualizado com sucesso!');
            mainMenu();
            break;
        case '8':
            listarBaralhos();
            index = parseInt(prompt(' Digite o ID do baralho que deseja excluir: ')) -1;
            deletarBaralho(index);
            console.log('Baralho deletado com sucesso!');
            mainMenu();
            break;
        case '9':
            listarFlashcard();
            index = parseInt(prompt(' Digite o ID do flashcard que deseja excluir: ')) -1;
            deletarFlashcard();
            console.log('Flashcard deletado com sucesso!');
            mainMenu();
            break;
        case '10':
            index = prompt('Qual a pergunta voce deseja buscar?: ');
            buscarFlashcardsPorPergunta(index);
            mainMenu();
            break;
        case '0':
            console.log('Saindo do programa...');
            break;
        default:
            console.log('Opção inválida!');
            mainMenu();        
    };
};