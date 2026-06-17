console.log("script caricato");


const contenitore = document.querySelector("div");

const nome = "nicolò";
const ruolo = "studente";
const anno = 1998;
contenitore.innerHTML = `
<h1> ${nome}</h1>
<p>${ruolo}</p>
<small>${anno}</small>
`;
contenitore.style.backgroundColor = "green";
contenitore.style.color = "red";
contenitore.classList.add("IO");
contenitore.setAttribute("data-anno", "17/06/2026");
console.log(contenitore.hasAttribute("data-anno"));
