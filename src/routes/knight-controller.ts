import express from "express";
import {KnightService} from "../services/knight-service";
import {KnightEntity} from "../entities/knight-entity";
import {HeroService} from "../services/hero-service";

const router = express.Router()
const knightService = new KnightService()
const heroService = new HeroService()
router.post("/",async (req,res)=>{
    try{
        const {heroName} = req.body
        const knight = new KnightEntity()
        knight.heroName = heroName
        const result = await knightService.insert(knight)
        await heroService.insert(result)
        return res.json(result)
    }catch (e: Error|any){
        res.status(500).send(e)
    }

})
router.delete("/:heroId",async (req,res)=>{
    try{
        const {heroId} = req.params
        const knight = await knightService.find(heroId)
        if (!knight) {
            return res.status(404).send("knight does not exist!")
        }
        const result = await knightService.delete(heroId)
        return res.json({result, knight})
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})

export {router as KnightController}