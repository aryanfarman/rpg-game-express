import {FoodEntity} from "../entities/food-entity";


export class FoodService{

    async insert(data: FoodEntity){
        const food= FoodEntity.create(data)
        return await food.save();
    }

    async find(id:string){
        const food = await FoodEntity.findOne(id)
        return food
    }


}