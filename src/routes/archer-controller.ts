import express from "express";
import {ArcherEntity} from "../entities/archer-entity";
import {ArcherService} from "../services/archer-service";
import {HeroEntity} from "../entities/hero-entity";
import {HeroService} from "../services/hero-service";

const router = express.Router()
const archerService = new ArcherService()
const heroService = new HeroService()
router.post("/",async (req,res)=>{
    const {heroName}=await req.body
    const archer = new ArcherEntity()
    archer.heroName=heroName
    const result =await archerService.insert(archer)
    await heroService.insert(result)
    return res.json(result)

})


export {router as ArcherController}