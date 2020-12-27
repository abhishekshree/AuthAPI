import {Router} from "express";
import {authByToken} from "../middlewares/auth";
import {getUserByEmail} from "../controllers/users";


const route = Router()

//GET /user         Login
route.get('/', authByToken ,async (req,res)=>{
    try {
        const user = await getUserByEmail((req as any).user.email)
        return res.status(200).json({user})
    }catch (e) {
        return res.status(404).json({
            errors: {body: [e.message]}
        })
    }
})

export const userRoute = route