function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}



let item1 = document.querySelectorAll('.cls-5');
console.log(item1);
item1.forEach(function(item){
  item.style.fill = "#"+getParameterByName('cor1');
  // console.log(item);
});

let item2 = document.querySelectorAll('.cls-6');
console.log(item2);
item2.forEach(function(item){
  item.style.fill = "#"+getParameterByName('cor2');
  // console.log(item);
});

// let item3 = document.querySelectorAll('.cls-7');
// console.log(item3);
// item3.forEach(function(item){
//   item.style.fill = colors[selectedColors[2]];
//   // console.log(item);
// });

// let item4 = document.querySelectorAll('.cls-4');
// console.log(item4);
// item4.forEach(function(item){
//   item.style.fill = colors[selectedColors[2]];
//   // console.log(item);
// });


function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

document.querySelector('body').innerHTML(getParameterByName('cor1'));
document.querySelector('body').innerHTML(getParameterByName('cor2'));

//window.print();
