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
exports.ClanService = void 0;
const clan_entity_1 = require("../entities/clan-entity");
const hero_entity_1 = require("../entities/hero-entity");
const typeorm_1 = require("typeorm");
const archer_entity_1 = require("../entities/archer-entity");
const soldier_entity_1 = require("../entities/soldier-entity");
const knight_entity_1 = require("../entities/knight-entity");
class ClanService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const clan = clan_entity_1.ClanEntity.create(data);
            const res = yield clan.save();
            return res;
        });
    }
    findAll(clanName, clanId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (clanName && !clanId) {
                return yield clan_entity_1.ClanEntity.find({
                    where: {
                        clanName: (0, typeorm_1.Like)(`%${clanName}%`)
                    },
                    join: {
                        alias: "clan",
                        leftJoinAndSelect: {
                            army: "clan.army",
                            foods: "clan.foods",
                            workers: "clan.workers"
                        }
                    },
                    relations: ["userFk"]
                });
            }
            else if (clanId) {
                return yield clan_entity_1.ClanEntity.find({
                    where: {
                        clanId: clanId
                    },
                    join: {
                        alias: "clan",
                        leftJoinAndSelect: {
                            army: "clan.army",
                            foods: "clan.foods",
                            workers: "clan.workers"
                        }
                    },
                    relations: ["userFk"]
                });
            }
            else {
                return yield clan_entity_1.ClanEntity.find({
                    where: {
                        clanName: (0, typeorm_1.Like)(`%%`)
                    },
                    join: {
                        alias: "clan",
                        leftJoinAndSelect: {
                            army: "clan.army",
                            foods: "clan.foods",
                            workers: "clan.workers"
                        }
                    },
                    relations: ["userFk"]
                });
            }
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const clan = clan_entity_1.ClanEntity.findOne(id, {
                relations: ["army", "foods", "workers"]
            });
            return clan;
        });
    }
    addHero(clan, hero) {
        return __awaiter(this, void 0, void 0, function* () {
            if (clan.army != undefined) {
                clan.army.push(hero);
            }
            else {
                clan.army = [hero];
            }
            //for updating heroes clanFk
            const archer = yield archer_entity_1.ArcherEntity.findOne(hero.heroId);
            const soldier = yield soldier_entity_1.SoldierEntity.findOne(hero.heroId);
            const knight = yield knight_entity_1.KnightEntity.findOne(hero.heroId);
            clan = yield clan.save();
            const updatedRes = yield hero_entity_1.HeroEntity.findOne(hero.heroId, {
                relations: ["clanFk"]
            });
            if (archer) {
                archer.clanFk = updatedRes.clanFk;
                yield archer.save();
            }
            else if (soldier) {
                soldier.clanFk = updatedRes.clanFk;
                yield soldier.save();
            }
            else if (knight) {
                knight.clanFk = updatedRes.clanFk;
                yield knight.save();
            }
            return clan;
        });
    }
    addFood(clan, food) {
        return __awaiter(this, void 0, void 0, function* () {
            if (clan.foods != undefined) {
                clan.foods.push(food);
            }
            else {
                clan.foods = [food];
            }
            yield clan.save();
            return clan;
        });
    }
    addWorker(clan, worker) {
        return __awaiter(this, void 0, void 0, function* () {
            if (clan.workers != undefined) {
                clan.workers.push(worker);
            }
            else {
                clan.workers = [worker];
            }
            yield clan.save();
            return clan;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield clan_entity_1.ClanEntity.delete(id);
        });
    }
}
exports.ClanService = ClanService;
