import {WorkerEntity} from "../entities/worker-entity";

export class WorkerService{
    async insert(){
        const worker=WorkerEntity.create()
        return await worker.save()
    }
    async find (id : string){
        const worker= await WorkerEntity.findOne(id)
        return worker;
    }
}