import {ClanEntity} from "../entity/clan-entity";
import {HeroEntity} from "../entity/hero-entity";
import {FoodEntity} from "../entity/food-entity";
import {WorkerEntity} from "../entity/worker-entity";
import {Like} from "typeorm";
import {ArcherEntity} from "../entity/archer-entity";
import {SoldierEntity} from "../entity/soldier-entity";
import {KnightEntity} from "../entity/knight-entity";


export class ClanService{
    async insert(data : ClanEntity){
        const clan = ClanEntity.create(data)
        return await clan.save();

    }
    async findAll(clanName:string,clanId: string){
        if(clanName && !clanId ){
            return await ClanEntity.find({

                where: {
                    clanName: Like(`%${clanName}%`)
                },
                join: {
                    alias: "clan",
                    leftJoinAndSelect: {
                        army: "clan.army",
                        foods: "clan.foods",
                        workers: "clan.workers"
                    }
                },
                relations: ["userFk"]
            })
        }else if (clanId){
            return await ClanEntity.find({
                where: {
                    clanId: clanId
                },
                join: {
                    alias: "clan",
                    leftJoinAndSelect: {
                        army: "clan.army",
                        foods: "clan.foods",
                        workers: "clan.workers"
                    }
                },
                relations: ["userFk"]
            })
        }else{
            return await ClanEntity.find({

                where: {
                    clanName: Like(`%%`)
                },
                join: {
                    alias: "clan",
                    leftJoinAndSelect: {
                        army: "clan.army",
                        foods: "clan.foods",
                        workers: "clan.workers"
                    }
                },
                relations: ["userFk"]
            })
        }


    }
    async find(id:string){
        return await ClanEntity.findOne(id, {
            relations: ["army", "foods", "workers"]
        })
    }
    async addHero(clan:ClanEntity,hero:HeroEntity){
        if(clan.army != undefined){
            clan.army.push(hero)
        }
        else{
            clan.army = [hero]
        }
        //for updating heroes clanFk
        const archer= await ArcherEntity.findOne(hero.heroId)
        const soldier= await SoldierEntity.findOne(hero.heroId)
        const knight= await KnightEntity.findOne(hero.heroId)
        clan=await clan.save()
        const updatedRes=await HeroEntity.findOne(hero.heroId,{
            relations : ["clanFk"]
        })
        if(archer){
            archer.clanFk=updatedRes.clanFk
            await archer.save()
        }else if(soldier){
            soldier.clanFk=updatedRes.clanFk
            await soldier.save()
        }else if(knight){
            knight.clanFk=updatedRes.clanFk
            await knight.save()
        }

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