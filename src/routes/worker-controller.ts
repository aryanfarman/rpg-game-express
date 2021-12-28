import express from "express";
import {WorkerService} from "../services/worker-service";

const router = express.Router()
const workerService = new WorkerService()
router.post("/",async (req,res)=>{
    try{
        const worker = await workerService.insert()
        return res.json(worker)
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})
router.delete("/:workerId",async (req,res)=>{
    try{
        const {workerId} = req.params
        const worker = await workerService.find(workerId)
        if (!worker) {
            return res.status(404).send("worker does not exist!")
        }
        const result = await workerService.delete(workerId)
        return res.json({result, worker})
    }catch (e: Error|any){
        res.status(500).send(e)
    }
})

export {router as WorkerController}