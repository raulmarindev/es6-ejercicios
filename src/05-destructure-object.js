/* Utiliza destructuring de arrays para capturar el nombre y el apellido
 * */
var perfil = {
  nombre: "Ryan",
  apellido: "Cromwell",
  fechaNacimiento: new Date("1979-01-02")
};

var nombre = perfil.nombre;
var apellido = perfil.apellido;

console.log(nombre, apellido); // Ryan Cromwell
