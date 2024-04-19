
function stars(){
    let count = 100;
    let scene = document.querySelector('.scene');
    let i = 0;
    while (i<count){
        let star = document.createElement("i");
        let x = Math.floor(Math.random() *(window.innerWidth-1));
        let y = Math.floor(Math.random() *(window.innerHeight-1));
        let duration = Math.random() *10;
        let size = Math.random() *2;

        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = size+'px';
        star.style.height = size+'px';

        star.style.animationDuration = 5+duration+'s';
        star.style.animationDelay = duration+'s';

        scene.appendChild(star);
        i++;
    }
}

stars();

