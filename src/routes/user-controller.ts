import express from "express";
import {UserService} from "../services/user-service";
import {UserEntity} from "../entities/user-entity";

const router = express.Router()
const userService = new UserService()
router.post("/",async (req,res)=>{
    const {name , email} = req.body
    const user = new UserEntity()
    user.email = email
    user.name = name
    const result = UserEntity.create(user)
    return res.json(result)
})

export {router as UserController}