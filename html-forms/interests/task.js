const interestCheck = Array.from(document.getElementsByClassName('interest__check'));

interestCheck.forEach(checkbox => checkbox.addEventListener('change', function(event) {
    const theTarget = event.target;
    const checkboxChildren = Array.from(theTarget.closest(".interest").querySelectorAll(".interest__check"));

    checkboxChildren.forEach(item => {
        if (item !== theTarget) {
            item.checked = theTarget.checked;
        }
    });
}))