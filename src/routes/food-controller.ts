import express from "express";
import {FoodEntity} from "../entities/food-entity";
import {FoodService} from "../services/food-service";

const router = express.Router()
const foodService=new FoodService()
router.post("/",async (req,res)=>{

    try{
        const {name, cal} = req.body
        const food = new FoodEntity()
        food.foodName = name
        food.cal = cal
        const result = await foodService.insert(food)
        return res.json(result)
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})
router.put("/:id",async (req,res)=>{

    try{
        const {name,cal}=req.body
        const {id} = req.params
        let food=await foodService.find(id)
        if(!food){
            return res.status(404).send("food does not found!")
        }
        food=await foodService.updateFood(food,name,cal)
        return  res.json(food)

    }catch (e: Error | any){
        res.status(500).send(e)
    }
})

router.get("/",async (req,res)=>{
    try {
        const {cal,name}= req.query
        const foods= await foodService.findAll(parseInt(cal as string),name as string)
        return res.json(foods)

    }catch (e:Error|any){
        res.status(500).send(e)
    }


})
router.delete("/:foodId",async (req,res)=>{
    try{
        const {foodId} = req.params
        const food = await foodService.find(foodId)
        if (!food) {
            return res.status(404).send("food does not exist!")
        }
        const result = await foodService.delete(foodId)
        return res.json({result, food})
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})
export {router as FoodController}