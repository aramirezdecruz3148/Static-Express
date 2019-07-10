const { app } = require('./lib/app');

const PORT = process.env.port || 7890;

app.listen(PORT, () => {
  console.log(`listening at the port ${PORT}`);
});
