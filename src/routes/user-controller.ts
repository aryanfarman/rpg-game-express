import express from "express";
import {UserService} from "../services/user-service";
import {UserEntity} from "../entities/user-entity";
import {ClanService} from "../services/clan-service";

const router = express.Router()
const userService = new UserService()
const clanService = new ClanService()
router.post("/",async (req,res)=>{
    const {name , email} = req.body
    const user = new UserEntity()
    user.email = email
    user.name = name
    const result = UserEntity.create(user)
    return res.json(result)
})
router.put("/:clanId/new-clan/:userId",async (req,res)=>{
    const {clanId , userId}=req.body
    const clan = await clanService.find(clanId)
    const user = await userService.find(userId)
    if(!clan){
        res.status(404).send("clan does not exist!")
    }
    if(!user){
        res.status(404).send("user does not exist!")
    }
    const result =await userService.addClan(user,clan)
    return res.send(result)
})


export {router as UserController}