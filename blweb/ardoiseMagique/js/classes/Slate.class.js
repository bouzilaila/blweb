'use strict'

//Ardoise-slate

// **********************************************************************************
// ********************************* Classe Slate ***********************************
// **********************************************************************************
class Slate {

    constructor(pen) {
        this.canvas = document.getElementById('slate'); // Récupération du <canvas>
        this.context = this.canvas.getContext('2d'); // Récupération du contexte du canvas
        this.currentLocation = null; // Au début on ne sait pas où se trouve la souris
        this.isDrawing = false; // Au début on ne dessine pas
        this.pen = pen; // Stockage de l'objet crayon

        // Installation des gestionnaires d'évènements de l'ardoise.
        //Enregistrer un evenement grace a addEventListener
        //le bind(this) pour envoyé les infos necessaires pour récupérer la position de la souris
        //mousdown-presser le bouton sur la souris
        this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        //mouseleave quitter l'enevement
        this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        //relacher le bouton de la souris
        this.canvas.addEventListener('mouseup', this.onMouseLeave.bind(this));
        //Déplacement du pointeur au-dessus de l'élément
        this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    // Méthode de nettoyage de l'ardoise
    clear() {
        // Effacement de tout le contenu de l'ardoise. donc du context de notre canvas à l'aide de clearRect(x, y, largeur, hauteur)
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // Méthode de récupération des coordonnées X,Y de la souris relative à l'ardoise
    getMouseLocation(event) {
        // Récupération des coordonnées de l'ardoise. à l'aide de getBoundingClientRect()
        let canvas = this.canvas.getBoundingClientRect();

        // Création d'un objet contenant les coordonnées X,Y de la souris relative à l'ardoise.
        // Qui dit relative dit en fonction de son conteneur
        let location = {
            x: event.clientX - canvas.left,
            y: event.clientY - canvas.top
        };

        return location;
    }

    // Gestionnaire d'évènement d'appui sur un bouton de la souris. onmousedown est déclenché par l'action d'appuyer avec un bouton de la souris (bouton droit ou bouton gauche) sur un élément HTML
    onMouseDown(event) {
        // On peut dessiner sur l'ardoise.
        this.currentLocation = this.getMouseLocation(event)
        // Enregistrement de la position actuelle de la souris. aà l'aide de getMouseLocation()
        this.isDrawing = true; // Je peux dessiner
    }

    // Gestionnaire d'évènement de sortie de l'ardoise par la souris.
    onMouseLeave() { // losque qu on quitte le souris
        // On ne peut plus dessiner sur l'ardoise.
        this.isDrawing = false;
    }

    // Gestionnaire d'évènement de déplacement de la souris sur l'ardoise.
    onMouseMove(event) {
        // Récupération de la position actuelle de la souris.
        let location = this.getMouseLocation(event)

        // Est-ce qu'on peut dessiner sur l'adoise ?
        if (this.isDrawing == true) { // Ou if (this.isDrawing) {
            // Préparation de l'ardoise à l'exécution d'un dessin, en configurant le pen avec le context
            this.pen.configure(this.context);

            // Début du dessin. (beginPath())
            this.context.beginPath(); // Début du chemin 

            // Dessine un trait entre les précédentes coordonnées de la souris et les nouvelles. (moveTo et lineTo, closePathstroke)
            this.context.moveTo(this.currentLocation.x, this.currentLocation.y); //Le tracé part du point x,y/Il s'agit en quelque sorte de décider à partir de quel emplacement le pinceau va être posé moveTo(x,y)
            this.context.lineTo(location.x, location.y); // tracé de la ligne lineTo(x,y) qui va ajouter un segment au chemin qui a ete débuté par beginPath()

            // Fin du dessin. closePath
            this.context.closePath(); // Fermeture du chemin pour revenir automatiquement au point de départ

            // Applique les changements dans le canvas. stroke
            this.context.stroke(); // le contour


            // Enregistrement de la nouvelle position de la souris.
            this.currentLocation = location;
        }
    }

}
