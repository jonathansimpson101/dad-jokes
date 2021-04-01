const joke = document.getElementById('joke');
const button = document.querySelector('.btn');

const getJoke = () => {
  config = {headers: { 'Accept' : 'application/json'}}

  fetch('https://icanhazdadjoke.com/', config)
    .then(response => response.json())
    .then(data => joke.innerText = `${data.joke}`)
}

getJoke();
button.addEventListener('click', getJoke);
