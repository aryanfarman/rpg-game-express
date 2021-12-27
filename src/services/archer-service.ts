import {ArcherEntity} from "../entities/archer-entity";
import {HeroEntity} from "../entities/hero-entity";

export class ArcherService{

    async insert(data:ArcherEntity){
        const archer= ArcherEntity.create(data)
        return await archer.save()
    }
    async find(id:string){
        return await ArcherEntity.findOne(id)

    }
    async delete(id:string){
       return  {
           archerRes: await ArcherEntity.delete(id),
           heroRes: await HeroEntity.delete(id)
       }

    }


}