let board;
let shape;
let nbScoreDisplayed = 3;
let gameTime;
let timerGlobal = 500;
let timer = timerGlobal;
let score = 0;
let nbLinesCompleted = 0;
let pause = false;
let interval;
let isGameOver = false;
let timeout;
let name="";
let buttonGameOver

function play() {
    let timerGlobal = 500;
    let timer = timerGlobal;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    isGameOver = false;
    $("p").remove();
    $("input").remove();
    if(buttonGameOver != undefined){
        buttonGameOver.remove();
    }
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    $('#playPause').on('click');  
    board = new Board(ctx, ctxNextShape);
    board.setPositionFirstShape()

    gameTime = setInterval(gameLoop, timer);
}

function pauseGame() {
    pause = !pause;
    if (pause) {
        document.getElementById('playPause').innerHTML = "Play";
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 0, 10, 20);
        ctx.fillStyle = 'white';
        ctx.fillRect(2, 7, 2, 6);
        ctx.fillRect(6, 7, 2, 6);
    }
    else document.getElementById('playPause').innerHTML = "Pause";
}

function keyDown(event) {
    if (!pause) {
        document.removeEventListener('keydown', keyDown);
        if (event.key == 'ArrowLeft') board.moveShapeLeft();
        if (event.key == 'ArrowRight') board.moveShapeRight();
        if (event.key == 'ArrowUp') board.rotateShape();
        if (event.key == 'ArrowDown') {
            timer /= 4; //diminue le timer pour faire tomber la pièce plus vite
        }
        board.drawShape();
    }
}

function keyUp(event) {
    document.addEventListener('keydown', keyDown);
    if (event.key == 'ArrowDown') {
        timer = timerGlobal; //remet le timer à la valeur d'origine
    }

}

function gameLoop() {
    if (!pause) {

        clearInterval(gameTime);
        gameTime = setInterval(gameLoop, timer);

        board.moveShapeDown();
        board.drawShape();
        score += board.detectLines();
        nbLinesCompleted = score / 10;
        $('.hisScore').html(score);
        $('.hisLines').html(nbLinesCompleted);

        if (isGameOver) {
            
            clearInterval(gameTime);

            ctx.fillStyle = 'black';

            ctx.fillRect(1, 2.9, 8, 1.4);
            ctx.fillRect(1, 8, 8, 1.2);
            ctx.font = '1px Arial';
            ctx.fillStyle = 'red';
            ctx.fillText('GAME OVER', 1.8, 3.95);

            ctx.font = '1px Arial';
            ctx.fillText('Enter your name', 1.35, 8.92);

        }

    }
}

/*
Récupère les meilleurs scores depuis le serveur et remplis une liste pour les affichés.
*/
function getBestScores() {
    $("li").remove();
    let scores = [];
    for (let i = 0; i < nbScoreDisplayed; i++) {
        scores[i] = $("<li></li>");
        $("ul").append(scores[i]);
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let theScores = JSON.parse(xhr.responseText);
            for (let i = 0; i < nbScoreDisplayed; i++) {
                scores[i].html(theScores[i].nom + " : " + theScores[i].score);
            }
        }
    };
    xhr.open('GET', 'http://localhost:3000/bestPlayers/' + nbScoreDisplayed, true);
    xhr.send();
}

/*
Affiche un meilleur score en plus
Maximum: 10 meilleurs scores affichés
*/
function getOneScoreMore() {
    if (nbScoreDisplayed < 10) {
        nbScoreDisplayed++;
        getBestScores();
    }
}


/*
Affiche un meilleur score en moins
Minimum: 3 meilleurs scores affichés
*/
function getOneScoreLess() {
    if (nbScoreDisplayed > 3) {
        nbScoreDisplayed--;
        getBestScores();
    }
}


function gameOver() {
    isGameOver = true;

    document.removeEventListener('keydown', keyDown);
    document.removeEventListener('keyup', keyUp);

    $('#playPause').off('click');  

    let divGameOver = document.createElement('div');
    divGameOver.setAttribute('class', 'gameOver')
    $('.nextShapeDisplay').append(divGameOver);

    $('.gameOver').append("<p>Name : </p>");
    let inputName = document.createElement('input');
    $('.gameOver').append(inputName);
    $('input').on('input', getName);

    buttonGameOver = document.createElement('button');
    buttonGameOver.setAttribute('type', 'button');
    buttonGameOver.setAttribute('id', 'buttonGameOver');

    $('.gameOver').append(buttonGameOver);

    $('#buttonGameOver').html("Enregistrement");
    $('#buttonGameOver').on('click', setScore);
}

function getName(event){
    name = event.target.value;
    console.log("lol");
}

/*
Ajoute un nouveau score au serveur et relance le jeu
*/
function setScore(){
    $.post('http://localhost:3000/newScore',{nom: name , score:score});
    isGameOver = false;
    $("p").remove();
    $("input").remove();
    buttonGameOver.remove();
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    $('#playPause').on('click');  
}




$(document).ready(function () {
    // Canvas
    canvas = document.getElementById('drawArea');
    ctx = canvas.getContext('2d');
    ctx.scale(30, 30);
    canvasNextShape = document.getElementById('nextShapeArea');
    ctxNextShape = canvasNextShape.getContext('2d');
    ctxNextShape.scale(30, 30);

    // Ajout des gestionnaires d'evenements
    $('#start').on('click', play);
    $('#playPause').on('click', pauseGame);
    $('#more').on('click', getOneScoreMore);
    $('#less').on('click', getOneScoreLess);

    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);

    getBestScores();

    play();
});