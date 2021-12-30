import {WarEntity} from "../entity/war-entity";
import {Equal, Like} from "typeorm";
import {ClanEntity} from "../entity/clan-entity";


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
    async addBattle(clans:ClanEntity[],war:WarEntity){
        if(war.clans != undefined){
            war.clans.push(clans[1],clans[0])
        }else{
            war.clans=clans
        }
        return await war.save()
    }


    async find(id:string){
        return await WarEntity.findOne(id)
    }
    async delete(id:string){
        return await  WarEntity.delete(id)
    }


}