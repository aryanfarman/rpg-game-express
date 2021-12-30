import {FoodEntity} from "../entity/food-entity";
import {Equal, Like} from "typeorm";


export class FoodService{

    async insert(data: FoodEntity){
        const food= await FoodEntity.create(data)
        return food.save();
    }

    async find(id:string){
        return await FoodEntity.findOne(id)
    }
    async updateFood(food:FoodEntity,foodName:string,foodCal:number){
        food.foodName=foodName
        food.cal=foodCal
        return await food.save()

    }
    async findAll(cal:number , name:string){

        if(!name && !cal){
            return await FoodEntity.find({
                where: {
                    foodName: Like(`%%`)
                }
            })
        }else if (cal&&!name) {

            return await FoodEntity.find({
                where: {
                    cal : Equal(cal)
                }
            })

        }else if (!cal && name){
            return await FoodEntity.find({
                where: {
                    foodName: Like(`%${name}%`)
                }
            })

        }else{
            return await FoodEntity.find({
                where : {
                    foodName:Like(`%${name}%`),
                    cal : Equal(cal)
                }
            })

        }


    }
    async delete(id:string){
        return await FoodEntity.delete(id)
    }



}