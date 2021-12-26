import express from "express";
import {ClanService} from "../services/clan-service";
import {ClanEntity} from "../entities/clan-entity";


const router = express.Router()
const clanService= new ClanService()
router.post("/",async (req,res)=>{
    const {clanName}=req.body
    const clan=new ClanEntity()
    clan.clanName=clanName
    const result = await clanService.insert(clan)
    return res.json(result)

})

export {router as ClanController}