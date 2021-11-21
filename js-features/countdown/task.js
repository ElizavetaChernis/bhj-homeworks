
    const time = function() {
        const timer = document.getElementById("timer");
        timer.textContent = timer.textContent - 1;
        if (timer.textContent == 0) {
            alert('Вы победили в конкурсе');
            clearInterval(interval);
        }
    }
    
    interval = setInterval(time,1000)
