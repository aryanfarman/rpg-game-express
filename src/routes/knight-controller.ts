import express from "express";
import {KnightService} from "../services/knight-service";
import {KnightEntity} from "../entities/knight-entity";
import {HeroService} from "../services/hero-service";

const router = express.Router()
const knightService = new KnightService()
const heroService = new HeroService()
router.post("/",async (req,res)=>{
    const {heroName}=req.body
    const knight = new KnightEntity()
    knight.heroName=heroName

    const result=await knightService.insert(knight)
    await heroService.insert(result)
    return res.json(result)

})

export {router as KnightController}