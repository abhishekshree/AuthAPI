import jwt from 'jsonwebtoken'
import {User} from "../entities/User";

// TODO:Move to config file
const JWT_SECRET = "some-very-very-secret"

export async function sign(user: User): Promise<string> {
    return new Promise((resolve, reject) => {
        jwt.sign({
            username: user.username,
            email: user.email
        }, JWT_SECRET, (err:any, encoded:string | undefined) => {
            if (err) return reject(err)
            else resolve(encoded as string)
        })
    })
}

export async function decode(token: string): Promise<User> {
    return new Promise((resolve, reject) => {

        jwt.verify(token, JWT_SECRET, (err, decoded: object | undefined) => {

            if (err) return reject(err)
            else return resolve(decoded as User)

        })


    })
}
