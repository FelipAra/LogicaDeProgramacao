//Atividade 2 Lógica de Programação

var lista = ["Mario", "Ana", "Laura", "Julia", "Carla"];

let diaAtual = "02";
let mesAtual = "09";
let anoAtual = "2021";
const dataAtual = diaAtual + "/ " + mesAtual + "/ " + anoAtual;

var idade = 18;
var nome = "Felipe";

var diaEvento = "21";
var mesEvento = "09";
var anoEvento = "2021";
var dataDoEvento = diaEvento + "/" + mesEvento + "/" + anoEvento;

if (lista.length < 100) {
  if (idade >= 18) {
    if (
      diaEvento > diaAtual &&
      mesEvento >= mesAtual &&
      anoEvento >= anoAtual
    ) {
      console.log("Evento Permitido em " + dataDoEvento);
    } else {
      console.log("Cadastro não permitido por data inválida!");
    }
  } else {
    console.log("Cadastro não permitido pela idade.");
  }
} else {
  console.log("limite de participantes excedido!");
}
