import express from "express";
import {FoodEntity} from "../entities/food-entity";
import {FoodService} from "../services/food-service";

const router = express.Router()
const foodService=new FoodService()
router.post("/",async (req,res)=>{

    const {name , cal} = req.body
    const food = new FoodEntity()
    food.foodName=name
    food.cal=cal
    const result =await foodService.insert(food)
    return res.json(result)
})

export {router as FoodController}