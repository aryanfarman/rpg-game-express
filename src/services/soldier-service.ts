import {SoldierEntity} from "../entities/soldier-entity";

export class SoldierService{
    async insert(data:SoldierEntity){
        const soldier=SoldierEntity.create(data)
        return await soldier.save()
    }
}