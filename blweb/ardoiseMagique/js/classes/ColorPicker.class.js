// **********************************************************************************
// ********************************* Classe ColorPicker ****************************
// **********************************************************************************

class ColorPicker {
    constructor() {
        this.canvas = document.getElementById('colorpalette'); // Récupération du <canvas>
        this.context = this.canvas.getContext('2d'); // Récupération du contexte du canvas
        this.pickedColor = {
            red: 0,
            green: 0,
            blue: 0
        };
        // Installation des gestionnaires d'évènements de la palette de couleurs.
        this.canvas.addEventListener('click', this.onClick.bind(this));

        // Dessine la palette de couleurs possibles.
        this.build();
    }

    // Méthode de construction graphique de la palette de couleurs
    build() {
        let gradient = this.context.createLinearGradient(0, 0, this.canvas.width, 0);

        // Dégradé rouge -> vert -> bleu horizontal.
        gradient.addColorStop(0, 'rgb(255,   0,   0)');
        gradient.addColorStop(0.15, 'rgb(255,   0, 255)');
        gradient.addColorStop(0.32, 'rgb(0,     0, 255)');
        gradient.addColorStop(0.49, 'rgb(0,   255, 255)');
        gradient.addColorStop(0.66, 'rgb(0,   255,   0)');
        gradient.addColorStop(0.83, 'rgb(255, 255,   0)');
        gradient.addColorStop(1, 'rgb(255,   0,   0)');

        this.context.fillStyle = gradient;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        gradient = this.context.createLinearGradient(0, 0, 0, this.canvas.height);

        // Dégradé blanc opaque -> transparent -> noir opaque vertical.
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(0,     0,   0, 0)');
        gradient.addColorStop(1, 'rgba(0,     0,   0, 1)');

        this.context.fillStyle = gradient;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // Méthode de récupération de la couleur sur laquelle l'utilisateur a cliqué
    getPickedColor() {
        console.log(this.pickedColor)
        return this.pickedColor
    }

    /*setPickedColor(pickedColor) {
        this.pickedColor = pickedColor
    }*/ //modifier

    // Gestionnaire d'évènement de clic sur un pixel de couleur de la palette
    onClick(event) {
        console.log('yeap')
        console.log(event)
        // Récupération des coordonnées de la souris au moment du clic.
        let canvasPicker = this.canvas.getBoundingClientRect();

        // Création d'un objet contenant les coordonnées X,Y de la souris relative à l'ardoise.
        // Qui dit relative dit en fonction de son conteneur
        let location = {
            x: event.clientX - canvasPicker.left,
            y: event.clientY - canvasPicker.top
        };

        // this.pickedColor.on('click', this.setColorAsRgb);
        let colorPicked = this.context.getImageData(location.x, location.y, 1, 1) // cette fonction attend 4 params (coordonnée X, coordonnée Y, Taille du focus X, Taille du focus Y)
        /*
         * Création d'un tableau contenant les valeurs RGBA du pixel sur
         * lequel l'utilisateur a cliqué.
         */
        // En remplissant la propriété de l'objet this.pickedColor
        // Enregistrement des valeurs RGB.
        this.pickedColor = {
            red: colorPicked.data[0],
            green: colorPicked.data[1],
            bleu: colorPicked.data[2]
        };

        /*
         * Déclenchement de l'évènement de l'application (trigger),
         * annonçant que l'utilisateur a sélectionné une nouvelle couleur.
         */
        $.event.trigger('toto:pick-color');
    }
}
