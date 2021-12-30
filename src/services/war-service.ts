import {WarEntity} from "../entities/war-entity";
import {Equal, Like} from "typeorm";


export class WarService{

    async insert(data:WarEntity){
        const war=WarEntity.create(data)
        return await war.save();
    }
    async updateWar(war:WarEntity,location:string){
        war.location=location
        return await war.save()
    }
    async findAll(location:string,warId: string){
        if(location && !warId){
            return await WarEntity.find({
                where: {
                    location: Like(`%${location}%`)
                },
                relations : ["clans"]
            })
        }else if(!location&&!warId){
            return await WarEntity.find({
                where: {
                    location: Like(`%%`)
                },
                relations : ["clans"]
            })
        }else{
            return await WarEntity.find({
                where: {
                    warId: Equal(warId)
                },
                relations : ["clans"]
            })
        }
    }
    async find(id:string){
        return await WarEntity.findOne(id)
    }
    async delete(id:string){
        return await  WarEntity.delete(id)
    }


}