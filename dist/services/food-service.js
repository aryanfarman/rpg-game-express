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
exports.FoodService = void 0;
const food_entity_1 = require("../entities/food-entity");
const typeorm_1 = require("typeorm");
class FoodService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const food = yield food_entity_1.FoodEntity.create(data);
            return food.save();
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const food = yield food_entity_1.FoodEntity.findOne(id);
            return food;
        });
    }
    updateFood(food, foodName, foodCal) {
        return __awaiter(this, void 0, void 0, function* () {
            food.foodName = foodName;
            food.cal = foodCal;
            return yield food.save();
        });
    }
    findAll(cal, name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name && !cal) {
                return yield food_entity_1.FoodEntity.find({
                    where: {
                        foodName: (0, typeorm_1.Like)(`%%`)
                    }
                });
            }
            else if (cal && !name) {
                return yield food_entity_1.FoodEntity.find({
                    where: {
                        cal: (0, typeorm_1.Equal)(cal)
                    }
                });
            }
            else if (!cal && name) {
                return yield food_entity_1.FoodEntity.find({
                    where: {
                        foodName: (0, typeorm_1.Like)(`%${name}%`)
                    }
                });
            }
            else {
                return yield food_entity_1.FoodEntity.find({
                    where: {
                        foodName: (0, typeorm_1.Like)(`%${name}%`),
                        cal: (0, typeorm_1.Equal)(cal)
                    }
                });
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield food_entity_1.FoodEntity.delete(id);
        });
    }
}
exports.FoodService = FoodService;
