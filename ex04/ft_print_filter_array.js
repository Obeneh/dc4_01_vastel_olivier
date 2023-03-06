/*Écrire une fonction qui filtre tous les nombres impairs d’un tableau.
Affichez le résultat dans la console de développement.*/

function filtre(tab) {
  var pairs = [];
  for (var i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
      pairs.push(tab[i]);
    }
  }
  console.log(pairs);
}

