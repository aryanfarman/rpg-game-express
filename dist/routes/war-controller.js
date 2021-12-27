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
const war_entity_1 = require("../entities/war-entity");
const router = express_1.default.Router();
exports.WarController = router;
const warService = new war_service_1.WarService();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { location } = req.body;
    const war = new war_entity_1.WarEntity();
    war.location = location;
    const result = yield warService.insert(war);
    return res.json(result);
}));
router.delete("/:warId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { warId } = req.params;
    const war = yield warService.find(warId);
    if (!war) {
        return res.status(404).send("war does not exist!");
    }
    const result = yield warService.delete(warId);
    return res.json({ war, result });
}));
