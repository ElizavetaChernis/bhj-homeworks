const items = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
xhr.responseType = 'json'
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();

xhr.addEventListener('readystatechange', function(){
  if(this.readyState == 4){
    const valute = this.response.response.Valute;

    for (let i in valute) {
      const charCodeValute = valute[i].CharCode;
      const valueValute = valute[i].Value;

      items.insertAdjacentHTML('beforeend', add(charCodeValute, valueValute));
    }

    document.querySelector('.loader').classList.remove('loader_active');
  }
});

function add(charCodeValute, valueValute){
  return `<div class="item">
        <div class="item__code">${charCodeValute}</div>
        <div class="item__value">${valueValute}</div>
        <div class="item__currency">руб.</div>
        </div>`;
}