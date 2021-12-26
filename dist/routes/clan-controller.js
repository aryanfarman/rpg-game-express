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
const clan_entity_1 = require("../entities/clan-entity");
const router = express_1.default.Router();
exports.ClanController = router;
const clanService = new clan_service_1.ClanService();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clanName } = req.body;
    const clan = new clan_entity_1.ClanEntity();
    clan.clanName = clanName;
    const result = yield clanService.insert(clan);
    return res.json(result);
}));
