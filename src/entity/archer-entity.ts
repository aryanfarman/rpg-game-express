import { Column, Entity} from "typeorm";
import {HeroEntity} from "./hero-entity";


@Entity("Archer")
export class ArcherEntity extends HeroEntity{
    @Column({
        name : "ArcherBow",
        type : "int"
    })bow : number = 30



}