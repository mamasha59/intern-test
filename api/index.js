const button = document.querySelector('#fetch');
const tbody = document.querySelector('tbody');

(function() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1',{
    method: "GET",
    headers: {
        Accept: 'aplication/json',
        'Content-Type': 'aplication/json',
    }
   })
   .then((res) => res.json())
   .then((data) => {
    data.forEach((element,index) => {
       const tr = document.createElement('tr');
       tr.innerHTML = `
       <td>${element.id}</td>
       <td>${element.symbol}</td>
       <td>${element.name}</td>
       `;
       tbody.appendChild(tr);
       if(index < 5) tr.classList.add('blue')

       if(element.symbol.toLowerCase() === 'usdt') tr.classList.add('green') // такого нет
    })
   })
   .catch((err) => console.log(err))
})()

// button.addEventListener('click', data)