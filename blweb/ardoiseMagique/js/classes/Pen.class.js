'use strict'

// utilisation du stylo

// **********************************************************************************
// ********************************* Classe Pen *************************************
// **********************************************************************************

class Pen {

    constructor() {
        this.color = 'black';
        this.size = 1;
    } // size et color par defaut le trait commence fin et noir 

    // Méthode de préparation de l'ardoise à l'exécution d'un dessin avec le crayon
    configure(slateCanvasContext) {
        // Mise à jour des propriétés de dessin de l'ardoise.
        slateCanvasContext.strokeStyle = this.color;
        slateCanvasContext.lineWidth = this.size;
    }

    // Méthode de configuration de la couleur du crayon (valeur HTML hexadécimale ou nom de couleur CSS prédéfini)
    setColor(color) {
        // Remplacer la couleur précédente par celle récupérée en param (color)
        console.log(this.color)
        this.color = color
        console.log(this.color)
    }

    // Méthode de configuration de la couleur du crayon avec les trois composantes RGB
    setColorAsRgb(red, green, blue) {
        // Stockage de la couleur au format RGB (comme la fonction CSS)
        this.color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    // Méthode de configuration de l'épaisseur du crayon.
    setSize(size) {
        console.log(this.size)
        this.size = size
        console.log(this.size)
    }
}
