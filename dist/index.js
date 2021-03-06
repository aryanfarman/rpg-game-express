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
const clan_controller_1 = require("./routes/clan-controller");
const user_controller_1 = require("./routes/user-controller");
const worker_controller_1 = require("./routes/worker-controller");
const food_controller_1 = require("./routes/food-controller");
const war_controller_1 = require("./routes/war-controller");
const knight_controller_1 = require("./routes/knight-controller");
const archer_controller_1 = require("./routes/archer-controller");
const soldier_controller_1 = require("./routes/soldier-controller");
const dbPort = process.env.DB_PORT;
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
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
            entities: ["src/entity/*.ts"]
        });
        console.log("database connected !");
        app.use(express_1.default.json());
        app.use("/api/hero/Archer", archer_controller_1.ArcherController);
        app.use("/api/hero/knight", knight_controller_1.KnightController);
        app.use("/api/hero/soldier", soldier_controller_1.SoldierController);
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
