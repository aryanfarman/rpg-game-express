import {KnightEntity} from "../entities/knight-entity";

export class KnightService{

    async insert(data:KnightEntity){

        const knight= await KnightEntity.create(data)
        return await knight.save()
    }
}