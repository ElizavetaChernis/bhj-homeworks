const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.querySelector(".dropdown__item");
const dropdownLink = Array.from(document.querySelectorAll(".dropdown__link"));

dropdownValue.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownLink.forEach((value) => {
    value.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownValue.textContent = value.textContent
    dropdownList.classList.toggle('dropdown__list_active');
    });
    });