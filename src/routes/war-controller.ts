import express from "express";
import {WarService} from "../services/war-service";
import {WarEntity} from "../entity/war-entity";
import {ClanService} from "../services/clan-service";

const router = express.Router()
const warService = new WarService()
const clanService = new ClanService()
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
router.put("/:warId",async (req,res)=>{
    try{
        const {location} = req.body;
        const {warId} = req.params
        let war = await warService.find(warId)
        if (!war) {
            return res.status(404).send("war does not exist!")
        }
        war = await warService.updateWar(war,location)
        return res.json(war)
    }catch (e:Error|any) {
        res.status(500).send(e)
    }
})

router.get("/",async (req,res)=>{
    try{
        const {location, id} = req.query
        const wars =await warService.findAll(location  as string,id as string)
        return res.json(wars)

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