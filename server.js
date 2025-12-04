import app from './app.js';

const port = 3001;

app.listen(port, () => {
  console.log(' ');
  console.log(`Servidor escutando na porta ${port}...`);
  console.log(`CTRL + clique http://localhost:${port}`);
});
