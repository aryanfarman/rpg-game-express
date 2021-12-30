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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerService = void 0;
const worker_entity_1 = require("../entity/worker-entity");
const typeorm_1 = require("typeorm");
class WorkerService {
    insert() {
        return __awaiter(this, void 0, void 0, function* () {
            const worker = worker_entity_1.WorkerEntity.create();
            return yield worker.save();
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield worker_entity_1.WorkerEntity.findOne(id);
        });
    }
    findAll(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                return yield worker_entity_1.WorkerEntity.find({
                    where: {
                        workerId: (0, typeorm_1.Equal)(id)
                    },
                    relations: ["clanFk"]
                });
            }
            else {
                return yield worker_entity_1.WorkerEntity.find({
                    relations: ["clanFk"]
                });
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield worker_entity_1.WorkerEntity.delete(id);
        });
    }
}
exports.WorkerService = WorkerService;
