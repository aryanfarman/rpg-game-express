import {SoldierEntity} from "../entities/soldier-entity";
import {HeroEntity} from "../entities/hero-entity";

export class SoldierService{
    async insert(data:SoldierEntity){
        const soldier=SoldierEntity.create(data)
        return await soldier.save()
    }
    async find(id:string){
        return await SoldierEntity.findOne(id)

    }
    async delete(id:string){
        return  {
            archerRes: await SoldierEntity.delete(id),
            heroRes: await HeroEntity.delete(id)
        }

    }

}