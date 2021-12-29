import {ClanEntity} from "../entities/clan-entity";
import {HeroEntity} from "../entities/hero-entity";
import {FoodEntity} from "../entities/food-entity";
import {WorkerEntity} from "../entities/worker-entity";
import {Like} from "typeorm";


export class ClanService{
    async insert(data : ClanEntity){
        const clan = ClanEntity.create(data)
        const res = await clan.save()
        return res;

    }
    async findAll(clanName:string|undefined=undefined,clanId: string|undefined = undefined){
        if(clanName != undefined){
            const clans = await ClanEntity.find({

                where :{
                    clanName : Like(`%${clanName}%`)
                },
                join : {
                    alias : "clan",
                    leftJoinAndSelect : {
                        army : "clan.army",
                        foods : "clan.foods",
                        workers : "clan.workers"
                    }
                },
                relations : ["userFk"]
            })
            return clans
        }else{
            const clan = await ClanEntity.find({
                where : {
                    clanId : clanId
                },
                join : {
                    alias : "clan",
                    leftJoinAndSelect : {
                        army : "clan.army",
                        foods : "clan.foods",
                        workers : "clan.workers"
                    }
                },
                relations : ["userFk"]
            })
            return clan
        }


    }
    async find(id:string){
        const clan = ClanEntity.findOne(id,{
            relations : ["army","foods","workers"]
        })
        return clan
    }
    async addHero(clan:ClanEntity,hero:HeroEntity){
        if(clan.army != undefined){
            clan.army.push(hero)
        }
        else{
            clan.army = [hero]
        }
        await clan.save()

        return clan;
    }
    async addFood(clan:ClanEntity,food:FoodEntity){
        if(clan.foods != undefined){
            clan.foods.push(food)
        }
        else {
            clan.foods = [food]
        }
        await clan.save()
        return clan;
    }
    async addWorker(clan:ClanEntity,worker:WorkerEntity){
        if(clan.workers != undefined){
            clan.workers.push(worker)
        }else {
            clan.workers= [worker]
        }
        await clan.save()
        return clan

    }
    async delete(id:string){
        return await ClanEntity.delete(id);
    }



}