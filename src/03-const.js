/* Utiliza const para que el valor de x no cambie
Pista: El resultado esperado es 1.
 * */
var x = 1;

if (true) {
  var x = 2; // Debería lanzar un error
}

document.getElementById("app").innerHTML = x;
