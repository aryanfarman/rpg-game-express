import {config} from "dotenv"
import {createConnection} from "typeorm";
import express from "express"
import {HeroEntity} from "./entities/hero-entity";
import {ArcherEntity} from "./entities/archer-entity";
import {KnightEntity} from "./entities/knight-entity";
import {SoldierEntity} from "./entities/soldier-entity";
import {ClanEntity} from "./entities/clan-entity";
import {FoodEntity} from "./entities/food-entity";
import {WorkerEntity} from "./entities/worker-entity";
import {WarEntity} from "./entities/war-entity";
import {UserEntity} from "./entities/user-entity";
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
            entities : [HeroEntity,ClanEntity,FoodEntity,ArcherEntity,KnightEntity,SoldierEntity,WorkerEntity,WarEntity,UserEntity]
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