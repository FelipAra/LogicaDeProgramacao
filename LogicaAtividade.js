//Atividade de lógica de programação encontro remoto 1//

var ListaDeHardware = [
  "Processador",
  "Placa Mãe",
  "Placa de Vídeo",
  "HD Sata",
  "HD Ssd",
  "Memoria Ram",
  "Fan Cooler",
  "Fonte de Alimentação",
  "Monitor Led",
  "Caixas de som",
  "Mouse",
  "Teclado",
  "Headset",
];

if (ListaDeHardware.length < 10) {
  console.log("Sua máquina não contem Hardwere sufucientes para funcionar.");
} else if (ListaDeHardware.length == 13) {
  console.log("Sua máquina está completa para uso.");
} else {
  console.log("Máquina utilizável");
}
