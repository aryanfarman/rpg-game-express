import {ArcherEntity} from "../entity/archer-entity";
import {HeroEntity} from "../entity/hero-entity";
import {Like} from "typeorm";

export class ArcherService{

    async insert(data:ArcherEntity){
        const archer= ArcherEntity.create(data)
        return await archer.save()
    }
    async find(id:string){
        return await ArcherEntity.findOne(id)

    }
    async updateArcher(archer:ArcherEntity,bow:number,name:string){
        archer.bow=bow
        archer.heroName=name
        let hero = await HeroEntity.findOne(archer.heroId)
        hero.heroName=archer.heroName
        return{
            archerRes: await archer.save(),
            heroRes: await hero.save()
        }

    }
    async findAll(name:string,id:string){
        if(name && id){
            return  await ArcherEntity.find({
                where : {
                    heroName : Like(`%${name}%`),
                    heroId : id
                },relations : ["clanFk"]
            })
        }else if(!name&&id){
            return await ArcherEntity.findOne(id,{relations:["clanFk"]})
        }else if(name&&!id){
            return await ArcherEntity.find({
                where: {
                    heroName:Like(`%${name}%`)
                },relations:["clanFk"]
            })
        }else {
            return await ArcherEntity.find({
                where:{
                    heroName:Like(`%%`)
                },relations:["clanFk"]
            })
        }
    }
    async delete(id:string){
       return  {
           archerRes: await ArcherEntity.delete(id),
           heroRes: await HeroEntity.delete(id)
       }

    }


}