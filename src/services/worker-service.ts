import {WorkerEntity} from "../entities/worker-entity";

export class WorkerService{
    async insert(){
        const worker=WorkerEntity.create()
        return await worker.save()
    }
    async find (id : string){
        return await WorkerEntity.findOne(id);
    }
    async delete(id:string){
        return await WorkerEntity.delete(id)
    }

}