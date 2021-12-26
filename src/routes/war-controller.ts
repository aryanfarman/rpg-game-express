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

export {router as WarController}