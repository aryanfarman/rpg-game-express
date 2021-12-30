import express from "express";
import {SoldierEntity} from "../entities/soldier-entity";
import {SoldierService} from "../services/soldier-service";
import {HeroService} from "../services/hero-service";
const router = express.Router()
const soldierService = new SoldierService()
const heroService = new HeroService()
router.post("/",async (req,res)=>{
    try{
        const {heroName} = req.body
        const soldier = new SoldierEntity()
        soldier.heroName = heroName
        const result = await soldierService.insert(soldier)
        await heroService.insert(result)
        return res.json(result)
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})
router.put("/:id",async (req,res)=>{
    try{
        const {name} = await req.body
        const {id} = await req.params
        const soldier = await soldierService.find(id)
        if(!soldier){
            return res.status(404).send("soldier does not exist!")
        }
        const result = await soldierService.updateSoldier(soldier,name)
        return res.json(result)

    }catch (e:Error|any){
        res.status(500).send(e)
    }
})
router.get("/",async (req,res)=>{
    try {
        const {name , id}=await req.query
        const soldiers = await soldierService.findAll(name as string,id as string)
        return res.json(soldiers)


    }catch (e:Error|any){
        return res.status(500).send(e)
    }
})
router.delete("/:heroId",async (req,res)=>{
    try{
        const {heroId} = req.params
        const soldier = await soldierService.find(heroId)
        if (!soldier) {
            return res.status(404).send("soldier does not exist!")
        }
        const result = await soldierService.delete(heroId)
        return res.json({result, soldier})
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})




export {router as SoldierController}