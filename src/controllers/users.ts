import {getRepository} from "typeorm";
import {User} from "../entities/user";
import {hashPassword} from "../utils/password";
import {sanitizeFields} from "../utils/security";


interface UserSignupData {
    username: string
    password: string // TODO: securely handle passwords
    email: string
}

export async function createUser(data: UserSignupData) {
    console.log(data)

    if (!data.username) throw new Error("Username blank")
    if (!data.email) throw new Error("Email blank")
    if (!data.password) throw new Error("Password blank")

    try {
        const user = new User()
        user.username = data.username
        user.email = data.email
        user.password = await hashPassword(data.password)
        await getRepository(User).save(user)

        console.log(sanitizeFields(user)) // Remove the password while sending

        return user
    } catch (e) {
        console.error(e)
    }
}