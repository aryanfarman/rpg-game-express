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
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const hero_entity_1 = require("./entities/hero-entity");
const archer_entity_1 = require("./entities/archer-entity");
const knight_entity_1 = require("./entities/knight-entity");
const soldier_entity_1 = require("./entities/soldier-entity");
const clan_entity_1 = require("./entities/clan-entity");
const food_entity_1 = require("./entities/food-entity");
const worker_entity_1 = require("./entities/worker-entity");
const war_entity_1 = require("./entities/war-entity");
const user_entity_1 = require("./entities/user-entity");
const hero_controller_1 = require("./routes/hero-controller");
const clan_controller_1 = require("./routes/clan-controller");
const user_controller_1 = require("./routes/user-controller");
const worker_controller_1 = require("./routes/worker-controller");
const food_controller_1 = require("./routes/food-controller");
const war_controller_1 = require("./routes/war-controller");
const dbPort = process.env.DB_PORT;
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, dotenv_1.config)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, typeorm_1.createConnection)({
            type: 'mssql',
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: parseInt(dbPort),
            database: process.env.DB_NAME,
            extra: {
                trustServerCertificate: true
            },
            synchronize: true,
            entities: [hero_entity_1.HeroEntity, clan_entity_1.ClanEntity, food_entity_1.FoodEntity, archer_entity_1.ArcherEntity, knight_entity_1.KnightEntity, soldier_entity_1.SoldierEntity, worker_entity_1.WorkerEntity, war_entity_1.WarEntity, user_entity_1.UserEntity]
        });
        console.log("database connected !");
        app.use("/api/hero", hero_controller_1.HeroController);
        app.use("/api/clan", clan_controller_1.ClanController);
        app.use("/api/user", user_controller_1.UserController);
        app.use("/api/food", food_controller_1.FoodController);
        app.use("/api/worker", worker_controller_1.WorkerController);
        app.use("/api/war", war_controller_1.WarController);
        app.listen(port, () => {
            console.log(`listening to port ${port} ...`);
        });
    }
    catch (error) {
        console.error(error);
    }
}))();
