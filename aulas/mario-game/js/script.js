const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const mario_jump = () =>  {
    mario.classList.add('mario_jump');

    /*removendo o pulo do mario para que ele pule dnv */
    setTimeout(() => {
        mario.classList.remove('mario_jump');
    }, 500);

}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom;

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/game=over.png';
        mario.style.widht = '75px';
        mario.style.marginLeft = '50px'
        
        clearInterval(loop)
    }


}, 10);

document.addEventListener('keydown', mario_jump);