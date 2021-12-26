import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClanEntity} from "./clan-entity";

@Entity("Food")
export class FoodEntity extends BaseEntity{
    @PrimaryGeneratedColumn("increment",{
        name:"FoodID"
    })foodId : number = -1
    @Column({
        name: "FoodName",
        type: "varchar"
    })foodName : string = ""
    @Column({
        name : "FoodCalorie",
        type : "int"
    })cal : number = 0
    @ManyToOne(
        ()=> ClanEntity,
        (clan)=>clan.foods
    )@JoinColumn({
        name : "ClanFK"
    })clanFk : ClanEntity
}