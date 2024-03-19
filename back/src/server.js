const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

const users = [
    { username: 'usuario1', password: 'senha1' },
    { username: 'usuario2', password: 'senha2' }
];

app.use(bodyParser.json());

app.use(cors());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    res.json({ success: true, message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ success: false, message: 'Nome de usuário ou senha incorretos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});