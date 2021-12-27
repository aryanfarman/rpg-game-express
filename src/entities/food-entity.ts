import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClanEntity} from "./clan-entity";

@Entity("Food")
export class FoodEntity extends BaseEntity{
    @PrimaryGeneratedColumn("increment",{
        name:"FoodID"
    })foodId : number
    @Column({
        name: "FoodName",
        type: "varchar"
    })foodName : string
    @Column({
        name : "FoodCalorie",
        type : "int"
    })cal : number
    @ManyToOne(
        ()=> ClanEntity,
        (clan)=>clan.foods
    )@JoinColumn({
        name : "ClanFK"
    })clanFk : ClanEntity
}