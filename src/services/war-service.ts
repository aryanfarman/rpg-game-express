import {WarEntity} from "../entities/war-entity";


export class WarService{

    async insert(data:WarEntity){
        const war=WarEntity.create(data)
        return await war.save();
    }


}