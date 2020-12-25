import {User} from "../entities/user";

export function sanitizeFields(user: User){
    if (user.password) delete user.password
    return user
}