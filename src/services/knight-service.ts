import {KnightEntity} from "../entity/knight-entity";
import {HeroEntity} from "../entity/hero-entity";
import {Like} from "typeorm";

export class KnightService{

    async insert(data:KnightEntity){

        const knight= await KnightEntity.create(data)
        return await knight.save()
    }
    async find(id:string){
        return await KnightEntity.findOne(id)

    }
    async updateKnight(knight:KnightEntity,name:string,sword:number){
        knight.heroName=name
        knight.sword=sword
        let hero = await HeroEntity.findOne(knight.heroId)
        hero.heroName=knight.heroName
        return{
            knightRes: await knight.save(),
            heroRes: await hero.save()
        }

    }
    async findAll(name:string,id:string){
        if(name && id){
            return  await KnightEntity.find({
                where : {
                    heroName : Like(`%${name}%`),
                    heroId : id
                },relations : ["clanFk"]
            })
        }else if(!name&&id){
            return await KnightEntity.findOne(id,{relations:["clanFk"]})
        }else if(name&&!id){
            return await KnightEntity.find({
                where: {
                    heroName:Like(`%${name}%`)
                },relations:["clanFk"]
            })
        }else {
            return await KnightEntity.find({
                where:{
                    heroName:Like(`%%`)
                },relations:["clanFk"]
            })
        }
    }
    async delete(id:string){
        return  {
            archerRes: await KnightEntity.delete(id),
            heroRes: await HeroEntity.delete(id)
        }

    }

}