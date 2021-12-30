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
exports.ArcherService = void 0;
const archer_entity_1 = require("../entity/archer-entity");
const hero_entity_1 = require("../entity/hero-entity");
const typeorm_1 = require("typeorm");
class ArcherService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const archer = archer_entity_1.ArcherEntity.create(data);
            return yield archer.save();
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield archer_entity_1.ArcherEntity.findOne(id);
        });
    }
    updateArcher(archer, bow, name) {
        return __awaiter(this, void 0, void 0, function* () {
            archer.bow = bow;
            archer.heroName = name;
            let hero = yield hero_entity_1.HeroEntity.findOne(archer.heroId);
            hero.heroName = archer.heroName;
            return {
                archerRes: yield archer.save(),
                heroRes: yield hero.save()
            };
        });
    }
    findAll(name, id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (name && id) {
                return yield archer_entity_1.ArcherEntity.find({
                    where: {
                        heroName: (0, typeorm_1.Like)(`%${name}%`),
                        heroId: id
                    }, relations: ["clanFk"]
                });
            }
            else if (!name && id) {
                return yield archer_entity_1.ArcherEntity.findOne(id, { relations: ["clanFk"] });
            }
            else if (name && !id) {
                return yield archer_entity_1.ArcherEntity.find({
                    where: {
                        heroName: (0, typeorm_1.Like)(`%${name}%`)
                    }, relations: ["clanFk"]
                });
            }
            else {
                return yield archer_entity_1.ArcherEntity.find({
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
                archerRes: yield archer_entity_1.ArcherEntity.delete(id),
                heroRes: yield hero_entity_1.HeroEntity.delete(id)
            };
        });
    }
}
exports.ArcherService = ArcherService;
