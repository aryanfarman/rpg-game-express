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
exports.SoldierService = void 0;
const soldier_entity_1 = require("../entities/soldier-entity");
const hero_entity_1 = require("../entities/hero-entity");
class SoldierService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const soldier = soldier_entity_1.SoldierEntity.create(data);
            return yield soldier.save();
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield soldier_entity_1.SoldierEntity.findOne(id);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                archerRes: yield soldier_entity_1.SoldierEntity.delete(id),
                heroRes: yield hero_entity_1.HeroEntity.delete(id)
            };
        });
    }
}
exports.SoldierService = SoldierService;
