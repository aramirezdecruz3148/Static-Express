export const getColors = () => {
  return fetch('/api/v1/colors')
    .then(res => res.json());
};

export const getColorDetail = (name) => {
  return fetch(`/api/v1/colors/${name}`)
    .then(res => res.json());
};
