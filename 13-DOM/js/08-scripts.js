const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);

//console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
//console.log(navegacion.children); // Este solo toma los elementos, no espacios

//console.log(navegacion.children[1.].nodeName);
//console.log(navegacion.children[1.].nodeType);

const card = document.querySelector('.card');

//card.children[1].textContent = 'Nuevo heading desde traversing de DOM';

//card.children[0.].src = 'img/hacer3.jpg';
//console.log(card.children[0]);

//Traversing del hijo al padre PARENT NODE
//console.log(card.parentElement.parentElement.parentElement.parentElement.parentElement);

//console.log(card.nextElementSibling);
//console.log(card.nextElementSibling.nextElementSibling);

//const ultimoCard = document.querySelector('.card:nth-child(4)');
//console.log(ultimoCard.previousElementSibling);