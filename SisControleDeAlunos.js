// Atividade encontro remoto 2

var Alunos = ["Mario", "Julia", "Laura", "Ana", "Carla", "Lucas", "Tulio"];

for (let aluno = 0; aluno < Alunos.length; aluno++) {
  if (aluno % 2 == 0) {
    if (aluno == 0) {
      console.log(`O número é ${aluno}`);
    } else {
      console.log(`O número ${aluno} é par`);
    }
  } else {
    console.log(`O número ${aluno} é ímpar`);
  }
}
