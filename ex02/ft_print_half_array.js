/*Écrire une fonction qui affiche dans la console de développement une
case sur deux d’un tableau de reçu en paramètre*/

function alternance(tab) {
  for (var i = 0; i < tab.length; i += 2) {
    console.log(tab[i]);
  }
}
