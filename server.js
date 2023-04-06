import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const saltRounds = 10;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'carefy',
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password ?? '', saltRounds);
    const sql = `INSERT INTO users (\`name\`, \`email\`, \`password\`) VALUES (?, ?, ?)`;
    await db.query(sql, [name, email, hashedPassword]);
    res.json({ status: 'Sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(8081, () => {
  console.log('Servidor rodando na porta 8081...');
});
