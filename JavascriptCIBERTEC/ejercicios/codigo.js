alert("Prueba de Javascript");


let frase = document.getElementById("fraseFavorita");
let autor = document.getElementById("autorFrase");

console.log(frase);

function cambio1(){
		frase.innerHTML = "Antes de encontrar a tu alma gemela, primero debes descubrir la tuya";
		autor.innerHTML = "Charles F. Glassman"
}