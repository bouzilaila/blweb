'use strict'   // Mode strict du JavaScript afficher plus de message d'erreur

let column
let row
let size
let multitab

//colone, ligne,

do {
  size = parseInt(window.prompt('Veuillez saisir la taille de la table de multiplications (ex:10):'));
  document.write('<table>')
}
while (isNaN(size));

multitab = []; // Tableau de multip

// Créer une balise table à insérer dans le html

// Créer une boucle qui va générer autant de ligne de l'utilisateur à défini 'size'
for (row = 1; row <= size; row++) {
    
  // Créer une balise tr à insérer dans le html
  // Initialise le tableau
  multitab[row] = [];
  // Créer la boucle qui va généner les colonnes dans chacune des lignes
  for (column = 1; column <= size; column++) {
    // Sachant qu'il faudra affiche la diagonale en couleur ici il faudra faire une condition qui permettra de déterminer si c'est la diagonale 'if/else'
    if (row === column) {
        document.write('<td class="same-number">');
    }
  else {
      // ...Sinon on créé simplement une cellule HTML.
      document.write('<td>');
    // Créer une balise td à insérer dans le html
    // Initialise les colonnes dans chacune des lignes
    multitab[row][column] = row * column;
    
    // Afficher le resultat entre les 2 balise td(qui correspondent à une cellule)
    // Fermer la balise td à insérer dans le html
  }
 
  document.write(row * column)

    // Fermeture de la cellule HTML.
    document.write('</td>')
  }

  // Fermeture de la ligne HTML.
  document.write('</tr>')
}

// Fermeture du tableau HTML.
document.write('</table>')
