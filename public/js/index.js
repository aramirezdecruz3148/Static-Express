import { getColors } from './services/colorsApi.js';

const mainContent = document.getElementById('root');

const colorsList = document.createElement('ul');


getColors()
  .then(colors => {
    colors.forEach(color => {
      const link = document.createElement('a');
      const li = document.createElement('li');
      link.href = `color.html?name=${color.name}`;
      link.classList.add(`${color.name}`);
      link.textContent = `${color.name}`;
      link.appendChild(li);

      colorsList.appendChild(link);
    });
  });

mainContent.appendChild(colorsList);
