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
exports.WarController = void 0;
const express_1 = __importDefault(require("express"));
const war_service_1 = require("../services/war-service");
const war_entity_1 = require("../entity/war-entity");
const clan_service_1 = require("../services/clan-service");
const router = express_1.default.Router();
exports.WarController = router;
const warService = new war_service_1.WarService();
const clanService = new clan_service_1.ClanService();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { location } = req.body;
        const war = new war_entity_1.WarEntity();
        war.location = location;
        const result = yield warService.insert(war);
        return res.json(result);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.put("/:warId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { location } = req.body;
        const { warId } = req.params;
        let war = yield warService.find(warId);
        if (!war) {
            return res.status(404).send("war does not exist!");
        }
        war = yield warService.updateWar(war, location);
        return res.json(war);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { location, id } = req.query;
        const wars = yield warService.findAll(location, id);
        return res.json(wars);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
router.delete("/:warId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { warId } = req.params;
        const war = yield warService.find(warId);
        if (!war) {
            return res.status(404).send("war does not exist!");
        }
        const result = yield warService.delete(warId);
        return res.json({ war, result });
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
