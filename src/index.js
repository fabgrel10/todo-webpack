import './scss/main.scss';
import './scss/normalize.css';

const app = document.getElementById('app');
const p = document.createElement('p');

app.innerHTML = '<h1>Webpack 5 Boilerplate</h1>';
p.textContent = 'Hello World!';
app.appendChild(p);
