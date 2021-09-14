const Etat = {
	SUSCEPTIBLE: "white",
	INCUBATION: "orange",
	INFECTED: "red",
	RECOVER: "green",
}

/**
* Class Virus
* gère le taux de transmission, le nombre de jours d'incubation de maladie du virus.
*/
class Virus{
    #txTransmission;
    #nbJoursIncubation;
    #nbJoursMalade;
    
    constructor(txTransmission,nbJoursIncubation,nbJoursMalade){
        this.#txTransmission=txTransmission;
        this.#nbJoursIncubation=nbJoursIncubation;
        this.#nbJoursMalade=nbJoursMalade;
    }

    getTxTransmission(){
        return this.#txTransmission;
    }

    setTxTransmission(txTransmission){
        this.#txTransmission=txTransmission;
    }

    getNbJoursIncubation(){
        return this.#nbJoursIncubation;
    }

    setNbJoursIncubation(nbJoursIncubation){
        this.#nbJoursIncubation=nbJoursIncubation;
    }

    getNbJoursMalade(){
        return this.#nbJoursMalade;
    }

    setNbJoursMalade(nbJoursMalade){
        this.#nbJoursMalade=nbJoursMalade;
    }
}

/*
* Class Personne
*/
class Personne{
    #etat;
    #positionX;
    #positionY;
    #ctx;
    #virus;
    #peutInfecter;
    #nbJourEnEtat;

    /**
    * se dessine une première fois depuis sa position
    */
    constructor(positionX, positionY, ctx){
        this.#etat=Etat.SUSCEPTIBLE;
        this.#peutInfecter=false;
        this.#positionX=positionX;
        this.#positionY=positionY;
        this.#ctx=ctx;
        this.#nbJourEnEtat=0;
        this.seDessiner();
    };

    /**
    * Renvoie un tableau à 4 entrés
    * chaque entré du tableau représente un voisin de la personne (haut, droite, bas, gauche)
    * si l'entré est à true, le voisin a été infecté
    * @returns array(4) exemple: [true,true,false,false]
    */
    infecterVoisin(){
        let voisinInfecte = [false,false,false,false];
        if(this.#virus && this.#peutInfecter && this.#etat==Etat.INCUBATION){
            for(let i=0; i<4; i++){
                voisinInfecte[i]= (Math.floor(Math.random()*100)<this.#virus.getTxTransmission()*100)?true:false;
            }
        } 
        return voisinInfecte;
    }

    /**
    * La personne se dessine dans le context du canvas depuis sa position
    * il dessine un rectangle noir puis un rectangle blanc plus petit pour laisser apparaitre une bordure
    * @returns nothing
    */
    seDessiner(){
        this.#ctx.fillStyle = "black";
        this.#ctx.fillRect(this.#positionX,this.#positionY,1,1);
        this.#ctx.fillStyle=this.#etat;
        this.#ctx.fillRect(this.#positionX - 0.1, this.#positionY - 0.1, 0.9, 0.9);
    }

    /**
    * chaque jour, la personne regarde si elle doit changer d'état en fonction des paramètres du virus
    * Si il vient d'être infecté, elle devient en incubation
    * @returns nothing
    */
    changerEtat(aEteInfecte){
        switch(this.#etat){
            case Etat.SUSCEPTIBLE: 
                if(aEteInfecte){
                    this.#etat = Etat.INCUBATION;
                }
                break;
            case Etat.INCUBATION: if(this.#nbJourEnEtat>=this.#virus.getNbJoursIncubation()){ // regarde depuis combien de jours elle est dans cette état et le compare avec le paramètre du virus adéquate
                    this.#etat = Etat.INFECTED;
                    this.#nbJourEnEtat=0;
                } else {
                    this.#nbJourEnEtat++;
                }
                break;
            case Etat.INFECTED: if(this.#nbJourEnEtat>=this.#virus.getNbJoursMalade()){
                    this.#etat = Etat.RECOVER;
                    this.#nbJourEnEtat=0;
                } else {
                    this.#nbJourEnEtat++;
                }
                break;
            default: this.#etat = Etat.RECOVER;
        }
        this.seDessiner();
    }

    setVirus(virus){
        this.#virus = virus;
    }

    setPeutInfecter(boolean){
        this.#peutInfecter = boolean;
    }

    getVirus(){
        return this.#virus;
    }

    getEtat(){
        return this.#etat;
    }

    setEtat(etat){
        this.#etat = etat
        this.seDessiner();
        this.#nbJourEnEtat++;
    }
}

/**
* Class Simulateur
*/
class Simulateur{
    #nbPas;
    #nbLigne;
    #nbColonne;
    #personne;
    #virus;
    #ctx;
    #timer;
    #vitSimulation;
    #simulationFinit;
    
    /**
    * Créer une instance pour chaque personne et leur donne le context du canvas pour qu'ils puissent se dessiner eux-mêmes
    */
    constructor(nbLigne,nbColonne, ctx, vitSimulation){
        this.#nbPas=0;
        this.#nbLigne=nbLigne;
        this.#nbColonne=nbColonne;
        this.#personne = new Array(nbColonne);
        this.#vitSimulation = vitSimulation;
        this.#ctx = ctx;
        this.#simulationFinit = false;

        for(let i=0 ; i<this.#nbColonne ; i++){
            this.#personne[i] = new Array(this.#nbLigne)
            for(let j=0 ; j<this.#nbLigne ; j++){
                this.#personne[i][j] = new Personne(i,j,this.#ctx);
            }
        }
        console.log(ctx);
    }

    getNbPas(){
        return this.#nbPas;
    }

    setNbPas(nbPas){
        this.#nbPas=nbPas;
    }
    
    getNbLigne(){
        return this.#nbLigne;
    }

    setNbLigne(nbLigne){
        this.#nbLigne=nbLigne;
    }

    getNbColonne(){
        return this.#nbColonne;
    }

    setNbColonne(nbColonne){
        this.#nbColonne=nbColonne;
    }

    setVirus(virus){
        this.#virus=virus;
    }

    /**
    * choisi une personne au hazard et lui donne le virus
    * lance une boucle pour simuler les jours
    * @returns nothing
    */
    demarrer(automatique){
        let ligne = Math.floor(Math.random()*this.#nbLigne);
        let colonne = Math.floor(Math.random()*this.#nbColonne);

        this.#personne[colonne][ligne].setEtat(Etat.INCUBATION);
        this.#personne[colonne][ligne].setVirus(this.#virus);
        this.#personne[colonne][ligne].setPeutInfecter(true);

        if(automatique){
            clearInterval(this.#timer);
            this.#timer = setInterval(() => {this.avanceUnPas(true)},this.#vitSimulation);
        }
    }

    /**
    * supprime toutes les anciennes personnes et en créer des nouvelles et remet à zéro le nombre de jour
    * @returns nothing
    */
    arreter(){
        this.#personne.forEach((element,i) => {
            let colonne = i;
            element.forEach((element,i) => {
                let ligne = i;
                delete(this.#personne[colonne][ligne]);
            })
        });

        for(let i=0 ; i<=this.#nbColonne ; i++){
            this.#personne[i] = new Array(this.#nbLigne)
            for(let j=0 ; j<=this.#nbLigne ; j++){
                this.#personne[i][j] = new Personne(i,j,this.#ctx);
            }
        }
        clearInterval(this.#timer);
        this.#nbPas=0;
    }

    /**
    * avance le jour de 1
    * pour chaque personne en incubation, lui demande quels voisins il infecte
    * donne le virus à ces personnes qui à la fin du jour peuvent infecter à leur tour
    * @returns nothing
    */
    avanceUnPas(simulateurDemarrer){
        if(simulateurDemarrer){
            this.#nbPas++;
            this.#personne.forEach((element,i) => {
            let colonne = i;
            element.forEach((element,i) => {
                let ligne = i;
                let voisinInfecte = element.infecterVoisin();
                for(let i=0; i<4 ;i++){
                    if(voisinInfecte[i]){
                        switch(i){
                            case 0: if(colonne-1 >=0){
                                        if(this.#personne[colonne-1][ligne].getEtat() == Etat.SUSCEPTIBLE){
                                            this.#personne[colonne-1][ligne].changerEtat(true);
                                            this.#personne[colonne-1][ligne].setVirus(this.#virus);
                                        }
                                    }
                                break;
                            case 1: if(ligne-1 >=0){
                                        if(this.#personne[colonne][ligne-1].getEtat() == Etat.SUSCEPTIBLE){
                                            this.#personne[colonne][ligne-1].changerEtat(true);
                                            this.#personne[colonne][ligne-1].setVirus(this.#virus);
                                        }
                                    }
                                break;
                            case 2: if(colonne+1 <this.#nbColonne){
                                        if(this.#personne[colonne+1][ligne].getEtat() == Etat.SUSCEPTIBLE){
                                            this.#personne[colonne+1][ligne].changerEtat(true);
                                            this.#personne[colonne+1][ligne].setVirus(this.#virus);
                                        }
                                    }
                                break;
                            case 3: if(ligne+1 <this.#nbLigne){
                                        if(this.#personne[colonne][ligne+1].getEtat() == Etat.SUSCEPTIBLE){
                                            this.#personne[colonne][ligne+1].changerEtat(true);
                                            this.#personne[colonne][ligne+1].setVirus(this.#virus);
                                        }
                                    }
                                break;
                        }
                    }
                }
            })
        });
        this.#personne.forEach((element) => {
            element.forEach((element) => {
                if(element.getVirus()){
                    element.setPeutInfecter(true);
                }
                element.changerEtat(false);
            });
        });
        }
    }

    pause(){
        clearInterval(this.#timer);
    }

    reprendre(){
        this.#timer = setInterval(() => {this.avanceUnPas(true)},this.#vitSimulation);
    }

    setVitSimulation(vit){
        this.#vitSimulation=vit*1000;
        clearInterval(this.#timer);
        this.#timer = setInterval(() => {this.avanceUnPas(true)},this.#vitSimulation);
    }

    /**
     * détermine si la simulation est terminée
     * si il y a une personne qui n'est pas en état "RECOVER" la simulation n'est pas terminée
     * @returns true si la simulation est terminée, sinon false
     */
    getSimulationTerminer(){
        this.#personne.forEach((element) => {
            element.forEach((element) => {
                if(element.getEtat() !== Etat.RECOVER){
                    this.#simulationFinit = false;
                }
            });
        });
        if(this.#simulationFinit){
            clearInterval(this.#timer);
            this.#simulationFinit = true;
            return this.#simulationFinit;
        } else {
            this.#simulationFinit = true;
            return false;
        }
    }

    /**
     * détermine si le virus est mort
     * si tout le monde est en Etat "RECOVER" ou "SUSCEPTIBLE" le virus est mort et la simulation est terminée.
     * @returns true si la simulation est terminée, sinon false
     */
    getVirusMort(){
        this.#personne.forEach((element) => {
            element.forEach((element) => {
                if(element.getEtat() !== Etat.RECOVER && element.getEtat() !== Etat.SUSCEPTIBLE){
                    this.#simulationFinit = false;
                }
            });
        });
        if(this.#simulationFinit){
            clearInterval(this.#timer);
            this.#simulationFinit = true;
            return this.#simulationFinit;
        } else {
            this.#simulationFinit = true;
            return false;
        }
    }
}