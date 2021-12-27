import { Column, Entity} from "typeorm";
import {HeroEntity} from "./hero-entity";


@Entity("Soldier")
export class SoldierEntity extends HeroEntity{
    @Column({
        name: "SoldierSword",
        type: "int",
        default: 1
    }) Sword: number
}
