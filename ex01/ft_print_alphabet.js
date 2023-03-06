/*Écrire une fonction qui affiche l’alphabet en majuscule, une string
contenant l’alphabet en minuscule sera passée en paramètre la
fonction. Chaque lettre devra être stockée dans une cellule du
tableau.*/

function abcdmaj(abcd) {
    var alphabet = [];
    for (var i = 0; i < abcd.length; i++) {
      var lettre = abcd[i];
      if (lettre >= 'a' && lettre <= 'z') {
        var lettreMajuscule = String.fromCharCode(lettre.charCodeAt(0) - 32);
        alphabet.push(lettreMajuscule);
      }
    }
    console.log(alphabet);
  }
