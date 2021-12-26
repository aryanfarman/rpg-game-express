import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {ClanEntity} from "./clan-entity";

@Entity("Wars")
export class WarEntity extends BaseEntity{
    @PrimaryGeneratedColumn("increment",{
        name: "WarID"
    })warId:number

    @Column({
        name: "warLocation",
        type: "nvarchar"
    })location:string

    @ManyToMany(
        ()=>ClanEntity
    )@JoinTable({
        name:"WarResult",
        joinColumn:{
            name: "WarFK",
            referencedColumnName : "warId"

        },
        inverseJoinColumn:{
            name: "ClanFK",
            referencedColumnName : "clanId"
        }
    })clans:ClanEntity[]
}