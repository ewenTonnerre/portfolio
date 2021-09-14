let simulateurDemarrer = false;
let timer;
let ligne = 40;
let colonne = 52;
let canvas;
let ctx;

$(document).ready(function () {
    canvas = document.getElementById('drawArea');
    ctx = canvas.getContext('2d');
    ctx.scale(10,10);

    let simulateur = new Simulateur(ligne,colonne,ctx);
    let virus = new Virus(0.5,5,5);

    /**
     * lancement d'une boucle pour récupère le nombre de jours passé du simulateur afin de l'afficher
     * Vérifie si la simulation est terminée ou si le virus est mort afin d'afficher un message
     */
    timer = setInterval(() => {
        $('#nbJoursEcoules').html(simulateur.getNbPas());
        if(simulateur.getSimulationTerminer() && simulateurDemarrer){
            $('#demarrer').html("Recommencer");
            simulateurDemarrer = false;
            $('#messageFinSimulation').html('La simulation est terminé.');
        }
        if(simulateur.getVirusMort() && simulateurDemarrer){
            $('#demarrer').html("Recommencer");
            simulateurDemarrer = false;
            $('#messageFinSimulation').html('Le virus est mort.');
        }
    },500);

    /** 
     * =======================================================================
     * Ajout des gestionnaires d'evenements qui impacte les attributs du virus
     * =======================================================================
     */
    $('#inputTxTransmission').on('input', () => {
        $('#txTransmission').html($('#inputTxTransmission').val());
        virus.setTxTransmission($('#inputTxTransmission').val());
    });

    $('#inputJrIncubation').on('input', () => {
        $('#jrIncubation').html($('#inputJrIncubation').val());
        virus.setNbJoursIncubation($('#inputJrIncubation').val());
    });

    $('#inputJrMalade').on('input', () => {
        $('#jrMalade').html($('#inputJrMalade').val());
        virus.setNbJoursMalade($('#inputJrMalade').val());
    });

    /** 
     * ==============================================================
     * Ajout des gestionnaires d'evenements qui impacte le simulateur
     * ==============================================================
     */
    $('#inputVitSimulation').on('input', () => {
        if(simulateurDemarrer){
            if($('#demarrer').html() === "Pause"){
                simulateur.setVitSimulation($('#inputVitSimulation').val());
            }
        }
        $('#vitSimulation').html($('#inputVitSimulation').val());
    });

    $('#inputNbLigne').on('input', () => {
        $('#nbLigne').html($('#inputNbLigne').val());
    });

    $('#inputNbColonne').on('input', () => {
        $('#nbColonne').html($('#inputNbColonne').val());
    });

    /** 
     * Gère les fonctionnalités pause, reprendre, recommencer et démarrer sur le même bouton
     */
    $('#demarrer').on('click', () => {
        if(simulateurDemarrer){
            if($('#demarrer').html() == "Pause"){
                simulateur.pause();
                $('#demarrer').html("Reprendre");
            } else {
                simulateur.reprendre();
                simulateur.setVitSimulation($('#inputVitSimulation').val());
                $('#demarrer').html("Pause");
            }
        } else {
            if($('#demarrer').html() == "Recommencer"){
                simulateur.arreter();
                delete(simulateur);
                simulateur = new Simulateur(ligne,colonne,ctx);
                simulateur.setVirus(virus);
                simulateur.demarrer(true);
                simulateur.setVitSimulation($('#inputVitSimulation').val());
                simulateurDemarrer = true;
                $('#demarrer').html("Pause");
                $('#messageFinSimulation').html('');
            } else {
                delete(simulateur);
                simulateur = new Simulateur(ligne,colonne,ctx);
                simulateur.setVirus(virus);
                simulateur.demarrer(true);
                simulateur.setVitSimulation($('#inputVitSimulation').val());
                simulateurDemarrer = true;
                $('#demarrer').html("Pause");
                $('#messageFinSimulation').html('');
            }
        }
    });

    /** 
     * créer un nouveau canvas de taille 10*colonne sur 10*ligne
     * recréer un simulateur avec le contexte de ce nouveau canvas et le nombre de ligne et colonne
     */
    // 
    $('#validerLigneColonne').on('click', () => {
        simulateur.arreter();
        delete(simulateur);
        ligne = $('#inputNbLigne').val();
        colonne = $('#inputNbColonne').val();
        $('#drawArea').remove();
        $("<canvas id=\"drawArea\" width=\"" + (colonne*10-2) + "\" height=\"" + (ligne*10-2) + "\"> Your browser doesn't support canvas. </canvas>").insertBefore('#boutons');
        canvas = document.getElementById('drawArea');
        ctx = canvas.getContext('2d');
        ctx.scale(10,10);
        simulateur = new Simulateur(ligne,colonne,ctx);
        $('#demarrer').html("Démarrer");
        simulateurDemarrer = false;
        $('#messageFinSimulation').html('Le virus est mort.');
    });

    /**
     * démarre le simulateur si il ne l'était pas en mode non automatique
     * sinon avance d'un pas
     */
    $('#pasApas').on('click', () => {
        if(!simulateurDemarrer){
            delete(simulateur);
            simulateur = new Simulateur(ligne,colonne,ctx);
            simulateur.setVirus(virus);
            simulateur.demarrer(false);
            simulateurDemarrer = true;
            $('#demarrer').html("Reprendre");
            $('#messageFinSimulation').html('');
        } else {
            simulateur.avanceUnPas(simulateurDemarrer);
        }
    });

    $('#arreter').on('click',() => {
        $('#messageFinSimulation').html('');
        simulateur.arreter();
        $('#demarrer').html("Démarrer");
        simulateurDemarrer = false;
    });
});