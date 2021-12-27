import {ArcherEntity} from "../entities/archer-entity";

export class ArcherService{

    async insert(data:ArcherEntity){
        const archer= ArcherEntity.create(data)
        return await archer.save()
    }


}