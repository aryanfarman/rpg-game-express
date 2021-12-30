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
exports.ClanController = void 0;
const express_1 = __importDefault(require("express"));
const clan_service_1 = require("../services/clan-service");
const clan_entity_1 = require("../entity/clan-entity");
const hero_service_1 = require("../services/hero-service");
const food_service_1 = require("../services/food-service");
const worker_service_1 = require("../services/worker-service");
const router = express_1.default.Router();
exports.ClanController = router;
const clanService = new clan_service_1.ClanService();
const heroService = new hero_service_1.HeroService();
const foodService = new food_service_1.FoodService();
const workerService = new worker_service_1.WorkerService();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clanName } = req.body;
        const clan = new clan_entity_1.ClanEntity();
        clan.clanName = clanName;
        const result = yield clanService.insert(clan);
        return res.json(result);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.put("/:clanId/new-hero/:heroId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clanId, heroId } = req.params;
        const clan = yield clanService.find(clanId);
        const hero = yield heroService.find(heroId);
        if (!clan) {
            res.status(404).send("clan does not exist!");
        }
        if (!hero) {
            res.status(404).send("hero does not exist!");
        }
        const result = yield clanService.addHero(clan, hero);
        return res.json(result);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.put("/:clanId/new-food/:foodId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clanId, foodId } = req.params;
        const clan = yield clanService.find(clanId);
        const food = yield foodService.find(foodId);
        if (!clan) {
            res.status(404).send("clan does not exist!");
        }
        if (!food) {
            res.status(404).send("food does not exist!");
        }
        const result = yield clanService.addFood(clan, food);
        return res.json(result);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.put("/:clanId/new-worker/:workerId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clanId, workerId } = req.params;
        const clan = yield clanService.find(clanId);
        const worker = yield workerService.find(workerId);
        if (!clan) {
            res.status(404).send("clan does not exist!");
        }
        if (!worker) {
            res.status(404).send("worker does not exist");
        }
        const result = yield clanService.addWorker(clan, worker);
        return res.json(result);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.delete("/:clanId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clanId } = req.params;
        const clan = yield clanService.find(clanId);
        if (!clan) {
            return res.status(404).send("clan does not exist!");
        }
        const result = yield clanService.delete(clanId);
        return res.json({ clan, result });
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, id } = req.query;
        const clans = yield clanService.findAll(name, id);
        return res.json(clans);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
