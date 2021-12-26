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
exports.HeroService = void 0;
const hero_entity_1 = require("../entities/hero-entity");
class HeroService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const hero = hero_entity_1.HeroEntity.create(data);
            const result = yield hero.save();
            return result;
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const hero = yield hero_entity_1.HeroEntity.findOne(id);
            return hero;
        });
    }
}
exports.HeroService = HeroService;
