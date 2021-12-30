import express from "express";
import {UserService} from "../services/user-service";
import {UserEntity} from "../entity/user-entity";
import {ClanService} from "../services/clan-service";

const router = express.Router()
const userService = new UserService()
const clanService = new ClanService()
router.post("/",async (req,res)=>{
    const {name , email} = req.body
    const user = new UserEntity()
    user.email = email
    user.name = name
    const result = await userService.insert(user)
    return res.json(result)
})
router.put("/:userId",async (req,res)=>{
    try{
        const {userName, mail} = req.body;
        const {userId} = req.params
        let user = await userService.find(userId)
        if (!user) {
            return res.status(404).send("user does not exist!")
        }
        user = await userService.updateUser(userId, userName, mail)
        return res.json(user)
    }catch (e:Error|any) {
        res.status(500).send(e)
    }
})


router.put("/:userId/new-clan/:clanId",async (req,res)=>{
    try {

        const {userId, clanId} = req.params
        const clan = await clanService.find(clanId)
        const user = await userService.find(userId)
        if (!clan) {
            return res.status(404).send("clan does not exist!")
        }
        if (!user) {
            return res.status(404).send("user does not exist!")
        }
        const result = await userService.addClan(user, clan)
        return res.json(result)
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})
router.delete("/:userId",async (req,res)=>{
    try{
        const {userId} = req.params
        const user = await userService.find(userId)
        if (!user) {
            return res.status(404).send("user does not exist!")
        }
        const result = await userService.delete(userId)
        return res.json({user, result})
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})

router.get("/",async (req,res)=>{
    try{
        const {name, id} = req.query
            const users =await userService.findAll(name  as string,id as string)
            return res.json(users)

    }catch (e: Error|any){
        res.status(500).send(e)
    }
})

export {router as UserController}