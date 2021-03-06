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
exports.SoldierController = void 0;
const express_1 = __importDefault(require("express"));
const soldier_entity_1 = require("../entity/soldier-entity");
const soldier_service_1 = require("../services/soldier-service");
const hero_service_1 = require("../services/hero-service");
const router = express_1.default.Router();
exports.SoldierController = router;
const soldierService = new soldier_service_1.SoldierService();
const heroService = new hero_service_1.HeroService();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { heroName } = req.body;
        const soldier = new soldier_entity_1.SoldierEntity();
        soldier.heroName = heroName;
        const result = yield soldierService.insert(soldier);
        yield heroService.insert(result);
        return res.json(result);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = yield req.body;
        const { id } = yield req.params;
        const soldier = yield soldierService.find(id);
        if (!soldier) {
            return res.status(404).send("soldier does not exist!");
        }
        const result = yield soldierService.updateSoldier(soldier, name);
        return res.json(result);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, id } = yield req.query;
        const soldiers = yield soldierService.findAll(name, id);
        return res.json(soldiers);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router.delete("/:heroId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { heroId } = req.params;
        const soldier = yield soldierService.find(heroId);
        if (!soldier) {
            return res.status(404).send("soldier does not exist!");
        }
        const result = yield soldierService.delete(heroId);
        return res.json({ result, soldier });
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
