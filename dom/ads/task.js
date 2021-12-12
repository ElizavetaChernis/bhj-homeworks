let caseActive = 0;
let rotationSpeed;

const rotatorCase = document.querySelectorAll('.rotator__case');

function selectCase(){
    rotationSpeed = rotatorCase[caseActive].getAttribute('data-speed');

    setTimeout(() => {
        if (caseActive === rotatorCase.length - 1) {
            rotatorCase[caseActive].classList.remove('rotator__case_active');
            caseActive = 0;
            rotatorCase[caseActive].classList.add('rotator__case_active'); 
        } else {
            rotatorCase[caseActive].classList.remove('rotator__case_active');
            rotatorCase[caseActive].nextElementSibling.classList.add('rotator__case_active');
            ++caseActive;
        };
        selectCase();
    }, rotationSpeed);
}

selectCase();