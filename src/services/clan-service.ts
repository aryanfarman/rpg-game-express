import {ClanEntity} from "../entities/clan-entity";


export class ClanService{
    async insert(data : ClanEntity){
        const clan = ClanEntity.create(data)
        const res = await clan.save()
        return res;

    }
    async find(id:string){
        const clan = ClanEntity.findOne(id)
        return clan
    }



}