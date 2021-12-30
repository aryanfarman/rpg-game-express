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
exports.ArcherController = void 0;
const express_1 = __importDefault(require("express"));
const archer_entity_1 = require("../entities/archer-entity");
const archer_service_1 = require("../services/archer-service");
const hero_service_1 = require("../services/hero-service");
const router = express_1.default.Router();
exports.ArcherController = router;
const archerService = new archer_service_1.ArcherService();
const heroService = new hero_service_1.HeroService();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { heroName } = yield req.body;
        const archer = new archer_entity_1.ArcherEntity();
        archer.heroName = heroName;
        const result = yield archerService.insert(archer);
        yield heroService.insert(result);
        return res.json(result);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bow, name } = yield req.body;
        const { id } = yield req.params;
        const archer = yield archerService.find(id);
        if (!archer) {
            return res.status(404).send("archer does not exist!");
        }
        const result = yield archerService.updateArcher(archer, bow, name);
        return res.json(result);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, id } = yield req.query;
        const archers = yield archerService.findAll(name, id);
        return res.json(archers);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router.delete("/:heroId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { heroId } = req.params;
        const archer = yield archerService.find(heroId);
        if (!archer) {
            return res.status(404).send("archer does not exist!");
        }
        const result = yield archerService.delete(heroId);
        return res.json({ result, archer });
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
