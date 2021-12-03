/* Utiliza `let` para que no se cambie el valor de la x fuera del bloque condicional.
Pista: El resultado esperado es 1.
 * */
var x = 1;

if (x === 1) {
  var x = 2;
}

document.getElementById("app").innerHTML = x;
