import { Column, Entity} from "typeorm";
import {HeroEntity} from "./hero-entity";

@Entity("Knight")
export class KnightEntity extends HeroEntity{
    @Column({
        name: "KnightSword",
        type: "int",
        default: 5
    }) Sword: number = 5
}