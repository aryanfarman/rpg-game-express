import {config} from "dotenv"
import {createConnection} from "typeorm";
import express from "express"
import {HeroEntity} from "./entity/hero-entity";
import {ArcherEntity} from "./entity/archer-entity";
import {KnightEntity} from "./entity/knight-entity";
import {SoldierEntity} from "./entity/soldier-entity";
import {ClanEntity} from "./entity/clan-entity";
import {FoodEntity} from "./entity/food-entity";
import {WorkerEntity} from "./entity/worker-entity";
import {WarEntity} from "./entity/war-entity";
import {UserEntity} from "./entity/user-entity";
import {ClanController} from "./routes/clan-controller";
import {UserController} from "./routes/user-controller";
import {WorkerController} from "./routes/worker-controller";
import {FoodController} from "./routes/food-controller";
import {WarController} from "./routes/war-controller";
import {KnightController} from "./routes/knight-controller";
import {ArcherController} from "./routes/archer-controller";
import {SoldierController} from "./routes/soldier-controller";
const dbPort = process.env.DB_PORT as string
const port = process.env.PORT || 3000;

const app = express()



config();

(async ()=>{
    try {
        await createConnection({
            type: 'mssql',
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: parseInt(dbPort),
            database : process.env.DB_NAME,
            extra : {
                trustServerCertificate : true
            },
            synchronize : true ,
            entities : ["src/entity/*.ts"]
        })
        console.log("database connected !");
        app.use(express.json())
        app.use("/api/hero/Archer", ArcherController);
        app.use("/api/hero/knight",KnightController);
        app.use("/api/hero/soldier",SoldierController);
        app.use("/api/clan", ClanController);
        app.use("/api/user", UserController);
        app.use("/api/food", FoodController);
        app.use("/api/worker", WorkerController);
        app.use("/api/war", WarController);


        app.listen(port,()=>{
            console.log(`listening to port ${port} ...`)
        })



    }catch (error : Error | any){
        console.error(error)
    }



})();