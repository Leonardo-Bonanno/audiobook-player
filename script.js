const botaoPlayPause = document.getElementById('play-pause');
const botaoSeguinte = document.getElementById('seguinte');
const botaoAnterior = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let tocando = 0;
let capituloTocando = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar(){
    if (tocando === 0){       
        tocarFaixa();
        tocando = 1;
    } else{
        pausarFaixa();
        tocando = 0;
    }
}

function faixaSeguinte(){
    if(capituloTocando === numeroCapitulos){
        capituloTocando = 1;
    } else {
        capituloTocando += 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloTocando + ".mp3";
    tocarFaixa();
    tocando = 1;
    trocarNomeCapitulo();
}

function faixaAnterior(){
    if(capituloTocando === 1){
        capituloTocando = 10;
    } else {
        capituloTocando -= 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloTocando + ".mp3";
    tocarFaixa();
    tocando = 1;
    trocarNomeCapitulo();
}

function trocarNomeCapitulo(){
    nomeCapitulo.innerText = "Capítulo " + capituloTocando;
}

botaoPlayPause.addEventListener('click',tocarOuPausar);
botaoSeguinte.addEventListener('click', faixaSeguinte);
botaoAnterior.addEventListener('click', faixaAnterior);