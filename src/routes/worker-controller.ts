import express from "express";
import {WorkerService} from "../services/worker-service";

const router = express.Router()
const workerService = new WorkerService()
router.post("/",async (req,res)=>{
    const worker = await workerService.insert()
    return res.json(worker)
})

export {router as WorkerController}