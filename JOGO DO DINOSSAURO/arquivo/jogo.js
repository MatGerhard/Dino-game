const dinossauro = document.querySelector('.dinossauro');
const fundo = document.querySelector('.fundo');
let durante_pulo = false;
let pos = 0;

document.addEventListener('keydown', pressionar);
cria_obst();


function pressionar(event) {
    if (event.keyCode === 32) {
        if (!durante_pulo) {
    pular();}
    }
}
function pular(){
    durante_pulo = true;
    let tempo_subida = setInterval(() => {
        if (pos >= 150) {
            clearInterval(tempo_subida);
            let tempo_descida = setInterval(() => {
                if (pos <= 0) {
                    clearInterval(tempo_descida);
                    durante_pulo = false;
                } else {
                    pos -= 35;
                    dinossauro.style.bottom = pos + 'px';
                }
            }, 40);
        } else {
            pos += 35;
            dinossauro.style.bottom = pos + 'px';
        }
    }, 40);   
}
function cria_obst(){
    const obst = document.createElement('div');
    let obst_pos = 1500;
    let spawn_obst = Math.random() * 5000;

    obst.classList.add('obst');
    fundo.appendChild(obst);
    obst.style.left = 1500 + 'px';

    let move_obst = setInterval(() => {
    if(obst_pos < -60) {
        clearInterval(move_obst);
        fundo.removeChild(obst);
    } else if (obst_pos > 0 && obst_pos < 50 && pos < 60) {
        clearInterval (move_obst);
        document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    }
    else {
        obst_pos -= 15;
        obst.style.left = obst_pos + 'px'; 
    }
}, 40);
setTimeout (cria_obst, spawn_obst);
}