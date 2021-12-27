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
class ClanService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const clan = clan_entity_1.ClanEntity.create(data);
            const res = yield clan.save();
            return res;
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
            yield clan.save();
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
