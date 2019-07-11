import { getColorDetail } from './services/colorsApi.js';

const mainContent = document.getElementById('root');
const h3 = document.createElement('h3');

const search = new URLSearchParams(window.location.search);
const name = search.get('name');

getColorDetail(name)
  .then(color => {
    h3.textContent = `${color.name}: HEX-${color.hex}, RGB-${color.r, color.g, color.b}`;
  });
  
mainContent.appendChild(h3);

