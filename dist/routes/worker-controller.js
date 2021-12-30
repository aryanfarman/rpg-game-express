"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerController = void 0;
const express_1 = __importDefault(require("express"));
const worker_service_1 = require("../services/worker-service");
const router = express_1.default.Router();
exports.WorkerController = router;
const workerService = new worker_service_1.WorkerService();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const worker = yield workerService.insert();
        return res.json(worker);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
//no need
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const workers = yield workerService.findAll(id);
        return res.json(workers);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.delete("/:workerId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { workerId } = req.params;
        const worker = yield workerService.find(workerId);
        if (!worker) {
            return res.status(404).send("worker does not exist!");
        }
        const result = yield workerService.delete(workerId);
        return res.json({ result, worker });
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
