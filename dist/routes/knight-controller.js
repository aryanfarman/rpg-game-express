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
exports.KnightController = void 0;
const express_1 = __importDefault(require("express"));
const knight_service_1 = require("../services/knight-service");
const knight_entity_1 = require("../entities/knight-entity");
const hero_service_1 = require("../services/hero-service");
const router = express_1.default.Router();
exports.KnightController = router;
const knightService = new knight_service_1.KnightService();
const heroService = new hero_service_1.HeroService();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { heroName } = req.body;
        const knight = new knight_entity_1.KnightEntity();
        knight.heroName = heroName;
        const result = yield knightService.insert(knight);
        yield heroService.insert(result);
        return res.json(result);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.delete("/:heroId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { heroId } = req.params;
        const knight = yield knightService.find(heroId);
        if (!knight) {
            return res.status(404).send("knight does not exist!");
        }
        const result = yield knightService.delete(heroId);
        return res.json({ result, knight });
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
