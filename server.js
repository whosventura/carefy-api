import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json);
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "12345",
        database: "carefy"
    }
)

app.post('/register', (req, res) => {
    const sql = "INSERT INTO users ('name', 'email', 'password') VALUES(?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
})

app.listen(8081, () => {
    console.log("Rodando...");
})