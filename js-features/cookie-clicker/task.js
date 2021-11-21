const image = document.getElementById("cookie");

const imgSize = function() {
    image.width = 200;
}

const click = function() {
    const clickerCounter = document.getElementById("clicker__counter");
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
        image.width = 230;
        setTimeout(imgSize, 100);
}

image.onclick = click













