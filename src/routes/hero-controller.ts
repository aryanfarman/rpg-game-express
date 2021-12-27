import express from "express";
import {HeroService} from "../services/hero-service";
import {HeroEntity} from "../entities/hero-entity";

const router = express.Router()
const heroService = new HeroService();
router.post("/",async (req,res)=>{

    const {heroName} = req.body
    const hero = new HeroEntity()
    hero.heroName=heroName;
    const result = await heroService.insert(hero)
    return res.json(result)

})




export {router as HeroController}