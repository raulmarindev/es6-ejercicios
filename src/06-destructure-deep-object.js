/* Utiliza destructuring para extraer el link de twitter
 * */
var perfil = {
  nombre: "Ryan",
  apellido: "Cromwell",
  social: {
    twitter: "https://twitter.com/hearsparkbox",
    instagram: "https://www.facebook.com/seesparkbox"
  }
};

var twitter = perfil.social.twitter;

console.log(twitter); // https://twitter.com/hearsparkbox
