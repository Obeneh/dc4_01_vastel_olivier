/*Écrire une fonction qui insert dans un tableau un nombre reçu en
paramètre dans l’ordre croissant. Le tableau de référence sera le
suivant : let tab = [0,1,2,3,4,5,6,7,8,9]*/

function inserNbre(nbre, tab) {
  var i = 0;
  while (i < tab.length && nbre > tab[i]) {
    i++;
  }
  tab.splice(i, 0, nbre);
  console.log(tab);
}
