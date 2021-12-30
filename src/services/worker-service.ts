import {WorkerEntity} from "../entities/worker-entity";
import {Equal} from "typeorm";

export class WorkerService{
    async insert(){
        const worker=WorkerEntity.create()
        return await worker.save()
    }
    async find (id : string){
        return await WorkerEntity.findOne(id);
    }
    async findAll(id:string){
        if(id) {
            return await WorkerEntity.find({
                where: {
                    workerId: Equal(id)
                },
                relations: ["clanFk"]
            })
        }else {
            return await WorkerEntity.find({
                relations: ["clanFk"]
            })
        }
    }
    async delete(id:string){
        return await WorkerEntity.delete(id)
    }

}