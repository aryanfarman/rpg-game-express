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
exports.UserController = void 0;
const express_1 = __importDefault(require("express"));
const user_service_1 = require("../services/user-service");
const user_entity_1 = require("../entities/user-entity");
const clan_service_1 = require("../services/clan-service");
const router = express_1.default.Router();
exports.UserController = router;
const userService = new user_service_1.UserService();
const clanService = new clan_service_1.ClanService();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const user = new user_entity_1.UserEntity();
    user.email = email;
    user.name = name;
    const result = user_entity_1.UserEntity.create(user);
    return res.json(result);
}));
router.put("/:clanId/new-clan/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clanId, userId } = req.body;
    const clan = yield clanService.find(clanId);
    const user = yield userService.find(userId);
    if (!clan) {
        res.status(404).send("clan does not exist!");
    }
    if (!user) {
        res.status(404).send("user does not exist!");
    }
    const result = yield userService.addClan(user, clan);
    return res.send(result);
}));
