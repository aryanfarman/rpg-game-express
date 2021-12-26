import {FoodEntity} from "../entities/food-entity";


export class FoodService{

    async insert(data: FoodEntity){
        const food= FoodEntity.create(data)
        const res=await food.save()
        return res;
    }

    async find(id:number){
        const food = await FoodEntity.findOne(id)
        return food
    }


}