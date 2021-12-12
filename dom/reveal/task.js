const reveal = document.querySelectorAll('.reveal');
const viewHeight = window.innerHeight;

function isInViewport(element) {
    for (let i = 0; i < element.length; i++)  {
        const elementTop = element[i].getBoundingClientRect().top;
        if (elementTop < viewHeight && elementTop > 0) {
            element[i].classList.add('reveal_active');
        };
    };
};

document.addEventListener('scroll', function() { isInViewport(reveal);}
);