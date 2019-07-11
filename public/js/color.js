import { getColorDetail } from './services/colorsApi.js';

const mainContent = document.getElementById('root');
const h3 = document.createElement('h3');
const h2 = document.createElement('h2');

const search = new URLSearchParams(window.location.search);
const name = search.get('name');

getColorDetail(name)
  .then(color => {
    h2.textContent = `${color.name}`;
    h3.textContent = `#${color.hex}, rgb(${color.r}, ${color.g}, ${color.b})`;
  });
  
mainContent.appendChild(h2);
mainContent.appendChild(h3);

