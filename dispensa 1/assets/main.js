console.log("script caricato");
const primoP = document.querySelector('#box');
primoP.textContent = "ciao mondo"
primoP.style.backgroundColor = "blue";
primoP.style.color = "red";

const elemento = document.querySelector("#contenuto");
elemento.innerHTML = "<h1>titolo</h1> <p>paragrafo div</p>";
elemento.style.backgroundColor = "green";