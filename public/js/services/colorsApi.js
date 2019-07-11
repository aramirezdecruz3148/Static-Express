const search = new URLSearchParams(window.location.search);
const name = search.get('name');

export const getColors = () => {
  return fetch('/api/v1/colors')
    .then(res => res.json());
};

export const getColorDetail = () => {
  return fetch(`/api/v1/colors/${name}`)
    .then(res => res.json());
};
