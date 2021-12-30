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
exports.KnightService = void 0;
const knight_entity_1 = require("../entities/knight-entity");
const hero_entity_1 = require("../entities/hero-entity");
const typeorm_1 = require("typeorm");
class KnightService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const knight = yield knight_entity_1.KnightEntity.create(data);
            return yield knight.save();
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield knight_entity_1.KnightEntity.findOne(id);
        });
    }
    updateKnight(knight, name) {
        return __awaiter(this, void 0, void 0, function* () {
            knight.heroName = name;
            let hero = yield hero_entity_1.HeroEntity.findOne(knight.heroId);
            hero.heroName = knight.heroName;
            return {
                knightRes: yield knight.save(),
                heroRes: yield hero.save()
            };
        });
    }
    findAll(name, id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (name && id) {
                return yield knight_entity_1.KnightEntity.find({
                    where: {
                        heroName: (0, typeorm_1.Like)(`%${name}%`),
                        heroId: id
                    }, relations: ["clanFk"]
                });
            }
            else if (!name && id) {
                return yield knight_entity_1.KnightEntity.findOne(id, { relations: ["clanFk"] });
            }
            else if (name && !id) {
                return yield knight_entity_1.KnightEntity.find({
                    where: {
                        heroName: (0, typeorm_1.Like)(`%${name}%`)
                    }, relations: ["clanFk"]
                });
            }
            else {
                return yield knight_entity_1.KnightEntity.find({
                    where: {
                        heroName: (0, typeorm_1.Like)(`%%`)
                    }, relations: ["clanFk"]
                });
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                archerRes: yield knight_entity_1.KnightEntity.delete(id),
                heroRes: yield hero_entity_1.HeroEntity.delete(id)
            };
        });
    }
}
exports.KnightService = KnightService;
