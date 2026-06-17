console.log("script caricato");
const img = document.querySelector("img");

img.setAttribute("alt", "immagine del colore rosso");
console.log(img.getAttribute("src"));

console.log(img.hasAttribute("title"));
img.removeAttribute("title");
console.log(img.hasAttribute("title"));
