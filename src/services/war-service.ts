import {WarEntity} from "../entities/war-entity";


export class WarService{

    async insert(data:WarEntity){
        const war=WarEntity.create(data)
        return await war.save();
    }
    async find(id:string){
        return await WarEntity.findOne(id)
    }
    async delete(id:string){
        return await  WarEntity.delete(id)
    }


}