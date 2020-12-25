// @ts-ignore
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export function hashPassword(password: string):Promise<string> {
    return new Promise<string>((resolve, reject) => {

        bcrypt.hash(password, SALT_ROUNDS, (err: any, encrypted: string | PromiseLike<string>)=>{
            if(err) return reject(err)
            resolve(encrypted)
        })
    })
}

export function matchPassword(hash: string, password:string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        bcrypt.compare(password,hash,(err: any, same: boolean | PromiseLike<boolean>)=>{
            if(err) reject(err)

            resolve(same)
        })
    })
}

