import {WorkerEntity} from "../entities/worker-entity";

export class WorkerService{
    async insert(){
        const worker=WorkerEntity.create()
        const res = await worker.save()
        return res
    }
    async find (id : number){
        const worker= await WorkerEntity.findOne(id)
        return worker;
    }
}