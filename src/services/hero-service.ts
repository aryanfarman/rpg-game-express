import {HeroEntity} from "../entities/hero-entity";


export class HeroService{

    async insert(data:HeroEntity){
        const hero = HeroEntity.create(data)
        const result =await hero.save()
        return result;
    }

    async find(id:number){

        const hero = await HeroEntity.findOne(id)
        return hero;

    }


}