//Testing connection//
//console.log("hello world")

//create new function called addMovie that takes in an event as a parameter
document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message')

function addMovie(event) {
event.preventDefault();
let inputField = document.querySelector('input')

const movie = document.createElement('li')

const movieTitle = document.createElement("span");
movieTitle.textContent = inputField.value;
movieTitle.addEventListener("click", crossOffMovie);
movie.appendChild(movieTitle)

const list = document.querySelector("ul");
list.appendChild(movie);

inputField.value  = ''

}

