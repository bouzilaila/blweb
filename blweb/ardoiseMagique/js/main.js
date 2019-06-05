// **********************************************************************************
// ********************************* Code Principal *********************************
// **********************************************************************************

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 * Le gestionnaire d'évènement est une fonction anonyme que l'on donne directement à jQuery.
 */
$(function() {
    let program = new Program()
    // Une fois le dom chargé, créer une Instance du Program afin d'executé sa function start(le gestionnaire d'évènement principal)
    program.start()
})
