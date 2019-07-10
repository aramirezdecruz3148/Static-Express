import { getColorDetail } from './services/colorsApi.js';

const mainContent = document.getElementById('root');

getColorDetail()
  .then(colors => {
    colors.forEach(color => {
      const h3 = document.createElement('h3');
      h3.textContent = `${color.name}: HEX-${color.hex}, RGB-${color.r, color.g, color.b}`;

      mainContent.appendChild(h3);
    });
  });


