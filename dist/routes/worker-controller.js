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
    const worker = yield workerService.insert();
    return res.json(worker);
}));
router.delete("/:workerId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { workerId } = req.params;
    const worker = yield workerService.find(workerId);
    if (!worker) {
        return res.status(404).send("archer does not exist!");
    }
    const result = yield workerService.delete(workerId);
    return res.json({ result, worker });
}));
