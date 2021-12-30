import {SoldierEntity} from "../entities/soldier-entity";
import {HeroEntity} from "../entities/hero-entity";
import {Like} from "typeorm";

export class SoldierService{
    async insert(data:SoldierEntity){
        const soldier=SoldierEntity.create(data)
        return await soldier.save()
    }
    async find(id:string){
        return await SoldierEntity.findOne(id)

    }
    async updateSoldier(soldier:SoldierEntity,name:string){
        soldier.heroName=name
        let hero = await HeroEntity.findOne(soldier.heroId)
        hero.heroName=soldier.heroName
        return{
            archerRes: await soldier.save(),
            heroRes: await hero.save()
        }

    }
    async findAll(name:string,id:string){
        if(name && id){
            return  await SoldierEntity.find({
                where : {
                    heroName : Like(`%${name}%`),
                    heroId : id
                },relations : ["clanFk"]
            })
        }else if(!name&&id){
            return await SoldierEntity.findOne(id,{relations:["clanFk"]})
        }else if(name&&!id){
            return await SoldierEntity.find({
                where: {
                    heroName:Like(`%${name}%`)
                },relations:["clanFk"]
            })
        }else {
            return await SoldierEntity.find({
                where:{
                    heroName:Like(`%%`)
                },relations:["clanFk"]
            })
        }
    }
    async delete(id:string){
        return  {
            archerRes: await SoldierEntity.delete(id),
            heroRes: await HeroEntity.delete(id)
        }

    }

}