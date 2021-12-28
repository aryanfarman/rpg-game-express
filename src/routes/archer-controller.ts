import express from "express";
import {ArcherEntity} from "../entities/archer-entity";
import {ArcherService} from "../services/archer-service";
import {HeroService} from "../services/hero-service";

const router = express.Router()
const archerService = new ArcherService()
const heroService = new HeroService()
router.post("/",async (req,res)=>{
    try{
        const {heroName} = await req.body
        const archer = new ArcherEntity()
        archer.heroName = heroName
        const result = await archerService.insert(archer)
        await heroService.insert(result)
        return res.json(result)
    }catch (e: Error|any){
        res.status(500).send(e)
    }

})
router.delete("/:heroId",async (req,res)=>{
    try{
        const {heroId} = req.params
        const archer = await archerService.find(heroId)
        if (!archer) {
            return res.status(404).send("archer does not exist!")
        }
        const result = await archerService.delete(heroId)
        return res.json({result, archer})
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})

export {router as ArcherController}