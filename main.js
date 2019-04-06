let colors = [
  '#ef9a9a', //vermelho
  '#f06292', //rosa
  '#e1bee7', //roxo
  '#7986cb', //azul escuro
  '#81d4fa', //azul claro
  '#4db6ac', //verde escuro
  '#aed581', //verde
  '#ffd54f', //amarelo
  '#ff8a65' //laranja
];
console.log(colors);
let selectedColors = [rand(0,8), rand(0,8), rand(0,8)];
console.log(selectedColors);
let item1 = document.querySelectorAll('.cls-5');
console.log(item1);
item1.forEach(function(item){
  item.style.fill = colors[selectedColors[0]];
  // console.log(item);
});

let item2 = document.querySelectorAll('.cls-6');
console.log(item2);
item2.forEach(function(item){
  item.style.fill = colors[selectedColors[1]];
  // console.log(item);
});

// let item3 = document.querySelectorAll('.cls-7');
// console.log(item3);
// item3.forEach(function(item){
//   item.style.fill = colors[selectedColors[2]];
//   // console.log(item);
// });

let item4 = document.querySelectorAll('.cls-4');
console.log(item4);
item4.forEach(function(item){
  item.style.fill = colors[selectedColors[2]];
  // console.log(item);
});


function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

window.print();
