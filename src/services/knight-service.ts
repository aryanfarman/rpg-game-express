import {KnightEntity} from "../entities/knight-entity";
import {HeroEntity} from "../entities/hero-entity";

export class KnightService{

    async insert(data:KnightEntity){

        const knight= await KnightEntity.create(data)
        return await knight.save()
    }
    async find(id:string){
        return await KnightEntity.findOne(id)

    }
    async delete(id:string){
        return  {
            archerRes: await KnightEntity.delete(id),
            heroRes: await HeroEntity.delete(id)
        }

    }

}