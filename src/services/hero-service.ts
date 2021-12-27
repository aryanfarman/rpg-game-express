import {HeroEntity} from "../entities/hero-entity";


export class HeroService {

    async insert(data:HeroEntity){
        const hero = HeroEntity.create(data)
        return await hero.save();
    }

    async find(id:string){

        return await HeroEntity.findOne(id);


    }


}