console.log("script caricato");


const nome = "nicolò";
const ruolo = "studente boolean";
const attivo = true;


const scheda = document.querySelector(".scheda");

scheda.innerHTML = `
    <h2>${nome}</h2>
    <p>${ruolo}</p>
    <p>${attivo ? "Attivo" : "Non attivo"}</p>
`;

const scheda2 = document.createElement("div");

const nome1 = document.createElement("h2");
nome1.textContent = nome;

const ruolo1 = document.createElement("p");
ruolo1.textContent = ruolo;

const attivo1 = document.createElement("p");
attivo1.textContent = attivo ? "attivo" : "non attivo";

scheda2.appendChild(nome1);
scheda2.appendChild(ruolo1);
scheda2.appendChild(attivo1);
scheda.appendChild(scheda2);