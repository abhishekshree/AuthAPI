import express from 'express'
import {createConnection} from "typeorm";
import {Article} from "./entities/Article";
import {User} from "./entities/User";
import {usersRoute} from "./routes/users";
import {userRoute} from "./routes/user";

const app = express()

app.use(express.json())

app.use('/api/users', usersRoute)
app.use('/api/user', userRoute)

app.get('/', (req, res) =>{
    res.send("Hello, World")
})

async function start(){
    await createConnection({
        type: 'postgres',
        username: 'authdb',
        password: 'authdb',
        database: 'authapp',
        entities: [Article, User],
        synchronize: true,
        logging: true,
        logger: 'advanced-console',
        dropSchema: true
    })
    app.listen(3232,() => {
        console.log("Server started at http://localhost:3232/")
    })
}

start()

