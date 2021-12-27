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
exports.WarService = void 0;
const war_entity_1 = require("../entities/war-entity");
class WarService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const war = war_entity_1.WarEntity.create(data);
            return yield war.save();
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield war_entity_1.WarEntity.findOne(id);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield war_entity_1.WarEntity.delete(id);
        });
    }
}
exports.WarService = WarService;
