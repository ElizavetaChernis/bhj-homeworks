const tooltips = document.querySelectorAll('.has-tooltip');
let tooltip;

function showTooltip(event) {
    event.preventDefault();
    const nextElement = this.nextElementSibling;

    if (Boolean(nextElement) && nextElement.classList.contains('tooltip')) {
        nextElement.classList.toggle('tooltip_active');
    } else {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('tooltip', 'tooltip_active');
        elementDiv.innerText = this.title;
        elementDiv.dataset.position = 'right';
        let place = this.getBoundingClientRect();
        elementDiv.style.left = place.left + "px";
        this.insertAdjacentElement('afterEnd', elementDiv);
    }
}

function hideTooltips() {
    const activeElements = document.querySelectorAll('.tooltip_active');
    let activeElement;
    for (activeElement of activeElements) {
        activeElement.classList.toggle('tooltip_active');
    }
}

for (tooltip of tooltips) {
    tooltip.addEventListener('click', showTooltip);
    tooltip.addEventListener('mouseout', () => { hideTooltips(); });
}