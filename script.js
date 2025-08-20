let div = document.querySelector('div');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.map((item) => {
      div.innerHTML += `
        <div class= 'card'>
          <h1>${item.name}</h1>
          <b>${item.phone}</b>
        </div>
      `;
    });
  });