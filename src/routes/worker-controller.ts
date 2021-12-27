import express from "express";
import {WorkerService} from "../services/worker-service";

const router = express.Router()
const workerService = new WorkerService()
router.post("/",async (req,res)=>{
    const worker = await workerService.insert()
    return res.json(worker)
})
router.delete("/:workerId",async (req,res)=>{
    const {workerId} = req.params
    const worker = await workerService.find(workerId)
    if(!worker){
        return res.status(404).send("archer does not exist!")
    }
    const result  = await workerService.delete(workerId)
    return res.json({result,worker})
})

export {router as WorkerController}