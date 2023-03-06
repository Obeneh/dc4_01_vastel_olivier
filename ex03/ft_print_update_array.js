/*Écrire une fonction qui reçoit un tableau de chiffre en paramètre, qui
ajoute plus un à la valeur de chaque cellule et qui affiche le tableau
mis à jour.*/

function increTab(tab) {
  for (var i = 0; i < tab.length; i++) {
    tab[i]++;
  }
  console.log(tab);
}
