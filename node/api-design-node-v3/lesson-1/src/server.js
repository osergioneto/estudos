import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

let count = 0;

const loggerMiddleware = (req, res, next) => {
    console.log(`Request number: ${count++}`);
    next();
}

app.get("/", loggerMiddleware, (req, res) => {
    res.send({ message: "hello" });
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.send({ message: "ok" });
})

export const start = () => {
    app.listen(3000, () => console.log("Server in on 3000"));
}
