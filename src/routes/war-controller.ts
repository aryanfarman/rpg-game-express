import express from "express";
import {WarService} from "../services/war-service";
import {WarEntity} from "../entities/war-entity";

const router = express.Router()
const warService = new WarService()
router.post("/",async (req,res)=>{
    try{
        const {location} = req.body
        const war = new WarEntity()
        war.location = location
        const result = await warService.insert(war)
        return res.json(result)
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})
router.delete("/:warId",async (req,res)=>{
    try{
        const {warId} = req.params
        const war = await warService.find(warId)
        if (!war) {
            return res.status(404).send("war does not exist!")
        }
        const result = await warService.delete(warId)
        return res.json({war, result})
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})
export {router as WarController}