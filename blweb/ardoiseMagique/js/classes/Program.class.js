// **********************************************************************************
// ********************************* Classe Program *********************************
// **********************************************************************************
class Program {
    // Les éléments dont le program a besoin pour fonctionner
    constructor() {
        // Créé une instance des 3 objets necessaires (ColorPicker, Pen, Slate), sachant que Slate prend un pen en param cf class Slate.class.js
        this.pen = new Pen();
        this.colorPicker = new ColorPicker();
        this.slate = new Slate(this.pen);
        // Il te manque L'instance de l'ardoise et du colopicker
    }

    // Gestionnaire d'évènement de clic sur l'outil de pipette.
    onClickColorPicker() {
        // Afficher le colorPicker
        $('#colorpalette').fadeIn();
    }

    // Gestionnaire d'évènement de clic pour sélectionner une couleur de crayon prédéfinie.
    onClickPenColor(event) {
        // Récupération de la <div> qui a déclenché l'évènement.
        let div = event.currentTarget

        console.log(div)
        // Récupération de l'attribut HTML5 data-color.
        // Js pur
        let penColor = div.dataset.color
        //jQuery
        //let penColor = $(div).data('color')
        // Modification de la couleur du crayon.
        this.pen.setColor(penColor)
    }

    // Gestionnaire d'évènement de clic pour changer la taille du crayon.
    onClickPenSize(event) {
        // Récupération de la <div> qui a déclenché l'évènement.
        let div = event.currentTarget

        console.log(div)
        // Récupération de l'attribut HTML5 data-color.
        // Js pur
        let penSize = div.dataset.size
        //jQuery
        //let penColor = $(div).data('color')
        // Modification de la couleur du crayon.
        this.pen.setSize(penSize)
    }

    // Gestionnaire d'évènement de changement de la couleur du crayon.
    onPickColor() {
        // Récupération de la couleur sur laquelle l'utilisateur a cliqué.
        let color = this.colorPicker.getPickedColor()

        // $('.color').data('color');
        //this.
        // Changement de la couleur du crayon.(en RGB depuis Pen setColorAsRgb)
        this.pen.setColorAsRgb(color.red, color.green, color.blue)

        //$('.color').change('color');
        // this.penColor.setColorAsRgb(penColor); Il faut récup la couleur avant de pouvoir l'affectée
        // Cacher le colorpicker
        $('#colorpalette').hide('fast');
    }

    // Méthode appelée au démarrage de l'application.
    start() {
        // Installation des gestionnaires d'évènements des outils.
        $('#pipette').on('click', this.onClickColorPicker.bind(this));

        // gomme
        $('#gomme').on('click', this.slate.clear.bind(this.slate));

        // crayon.
        $('.color').on('click', this.onClickPenColor.bind(this));
        // size
        $('.size').on('click', this.onClickPenSize.bind(this));


        //$('colorpalette').on('click', this.colorPicker.bind(this));

        // Création d'un évènement spécifique à l'application. (en lien direct avec l'évènement à créer dans le onClick de ColorPicker)
        $(document).on('toto:pick-color', this.onPickColor.bind(this));
    }
}
