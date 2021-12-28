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
exports.FoodController = void 0;
const express_1 = __importDefault(require("express"));
const food_entity_1 = require("../entities/food-entity");
const food_service_1 = require("../services/food-service");
const router = express_1.default.Router();
exports.FoodController = router;
const foodService = new food_service_1.FoodService();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, cal } = req.body;
        const food = new food_entity_1.FoodEntity();
        food.foodName = name;
        food.cal = cal;
        const result = yield foodService.insert(food);
        return res.json(result);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.delete("/:foodId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodId } = req.params;
        const food = yield foodService.find(foodId);
        if (!food) {
            return res.status(404).send("food does not exist!");
        }
        const result = yield foodService.delete(foodId);
        return res.json({ result, food });
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
