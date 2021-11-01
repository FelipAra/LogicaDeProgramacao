//Atividade de lógica de programação encontro remoto 1//

var listaDePecas = ["Engrenagens", "Motor", "Freios", "Caixa de transmissão", "filtro de ar", "Eixos", "Diferencial", "Bomba de gasolina"];

if (listaDePecas.length > 10) {
    console.log("Não tem mais espaço nessa lista, impossível cadastrar.");
} else {
    console.log("É possível cadastrar mais peças.");
}

var pesoDasPecas = "";

if (pesoDasPecas < 100 ) {
    console.log("A peça deve possuir pelo menos 100 gramas.");
} else {
    console.log("A peça possui peso adequado.");
}

// Quantidade de caracteres com switch case

nomeDasPecas = "";

switch (nomeDasPecas.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio.");
        break;
    
    case 1:
    case 2:
    case 3:
        console.log("O nome deve conter mais de 3 caracteres, digite um nome adequado.");
        break;

    default:
        console.log("O nome está adequado para cadastro.");
        break;
}