import test_model_1 from "../models/user.model.js"
import bcryptjs from 'bcryptjs'


export const signup = async (req, res, next) => {
    
    try {
        const {xuiname,email,password} = req.body
        if (!password) {
            throw new Error('Password validation failure! Your password cannot be empty!')
            
        }
        const hashedPassword = bcryptjs.hashSync(password, 10)
        const new_xui = new test_model_1({ xuiname , email , password : hashedPassword })
        await new_xui.save()
        res.status(201).json("user created successfully!")
    } catch (error) {
        next(error)
    }
}