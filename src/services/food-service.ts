import {FoodEntity} from "../entities/food-entity";


export class FoodService{

    async insert(data: FoodEntity){
        const food= await FoodEntity.create(data)
        return food.save();
    }

    async find(id:string){
        const food = await FoodEntity.findOne(id)
        return food
    }
    async delete(id:string){
        return await FoodEntity.delete(id)
    }



}