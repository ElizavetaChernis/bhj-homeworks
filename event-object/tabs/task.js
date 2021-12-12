const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'))

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function(event) {
        let closeTab = event.target.closest('.tabs')

        let activeTab = closeTab.querySelector('.tab_active');
        let activeTabContent = closeTab.querySelector('.tab__content_active');

        activeTab.classList.remove('tab_active');
        activeTabContent.classList.remove('tab__content_active');

        tab[i].classList.toggle('tab_active');
        tabContent[i].classList.toggle('tab__content_active');
    });
};