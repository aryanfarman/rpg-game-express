import express from "express";
import {SoldierEntity} from "../entities/soldier-entity";
import {SoldierService} from "../services/soldier-service";
import {HeroService} from "../services/hero-service";
const router = express.Router()
const soldierService = new SoldierService()
const heroService = new HeroService()
router.post("/",async (req,res)=>{
    const {heroName}=req.body
    const soldier = new SoldierEntity()
    soldier.heroName=heroName
    const result = await soldierService.insert(soldier)
    await heroService.insert(result)
    return res.json(result)
})





export {router as SoldierController}