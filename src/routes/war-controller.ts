import express from "express";
import {WarService} from "../services/war-service";
import {WarEntity} from "../entities/war-entity";

const router = express.Router()
const warService = new WarService()
router.post("/",async (req,res)=>{
    const {location} = req.body
    const war = new WarEntity()
    war.location=location
    const result = await warService.insert(war)
    return res.json(result)
})
router.delete("/:warId",async (req,res)=>{
    const {warId}=req.params
    const war = await warService.find(warId)
    if(!war){
        return res.status(404).send("war does not exist!")
    }
    const result = await warService.delete(warId)
    return res.json({war, result})
})
export {router as WarController}