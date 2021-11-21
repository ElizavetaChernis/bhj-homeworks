const dead = document.getElementById('dead');
const lost = document.getElementById('lost');


for (let index = 1; index < 9; index++) {
    function getHole(index) {
        let click = document.getElementById(`hole${index}`);
        return click;
        
    } 

const ckeckHole = getHole (index);

ckeckHole.onclick = function() {
        if (ckeckHole.className.includes("hole_has-mole") === true) {
            ++ dead.textContent;
         } else {
            ++ lost.textContent;
    }
    console.log(dead.textContent);
        if (dead.textContent > 9) {
        alert ("Вы победили!");
        dead.textContent = 0;
        lost.textContent = 0;
    } else if (lost.textContent > 4) {
        alert ("Вы проиграли!");
        dead.textContent = 0;
        lost.textContent = 0;
    }
}
};

