import express from "express";
import {ClanService} from "../services/clan-service";
import {ClanEntity} from "../entity/clan-entity";
import {HeroService} from "../services/hero-service";
import {FoodService} from "../services/food-service";
import {WorkerService} from "../services/worker-service";


const router = express.Router()
const clanService= new ClanService()
const heroService = new HeroService()
const foodService = new FoodService()
const workerService = new WorkerService()
router.post("/",async (req,res)=>{
    try{
        const {clanName} = req.body
        const clan = new ClanEntity()
        clan.clanName = clanName
        const result = await clanService.insert(clan)
        return res.json(result)
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})

router.put("/:clanId/new-hero/:heroId",async (req,res)=>{
    try{
        const {clanId, heroId} = req.params
        const clan = await clanService.find(clanId)
        const hero = await heroService.find(heroId)
        if (!clan) {
            res.status(404).send("clan does not exist!")
        }
        if (!hero) {
            res.status(404).send("hero does not exist!")
        }
        const result = await clanService.addHero(clan, hero)

        return res.json(result)
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})

router.put("/:clanId/new-food/:foodId",async (req,res)=>{
    try{
        const {clanId, foodId} = req.params
        const clan = await clanService.find(clanId)
        const food = await foodService.find(foodId)

        if (!clan) {
            res.status(404).send("clan does not exist!")
        }
        if (!food) {
            res.status(404).send("food does not exist!")
        }

        const result = await clanService.addFood(clan, food)
        return res.json(result)
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})

router.put("/:clanId/new-worker/:workerId",async (req,res)=>{
    try{
        const {clanId, workerId} = req.params
        const clan = await clanService.find(clanId)
        const worker = await workerService.find(workerId)

        if (!clan) {
            res.status(404).send("clan does not exist!")
        }
        if (!worker) {
            res.status(404).send("worker does not exist")
        }
        const result = await clanService.addWorker(clan, worker)
        return res.json(result)
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})
router.delete("/:clanId",async (req,res)=>{
    try {
        const {clanId} = req.params
        const clan= await clanService.find(clanId)
        if(!clan){
            return res.status(404).send("clan does not exist!")
        }
        const result =await clanService.delete(clanId)
        return res.json({clan,result})
    }catch (e: Error|any){
        res.status(500).send(e)
    }

})
router.get("/",async (req,res)=>{
    try{
        const {name, id} = req.query
        const clans =await clanService.findAll(name as string,id as string)
        return res.json(clans)

    }catch (e: Error|any){
        res.status(500).send(e)
    }


})

export {router as ClanController}