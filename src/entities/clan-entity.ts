import {BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {HeroEntity} from "./hero-entity";
import {FoodEntity} from "./food-entity";
import {WorkerEntity} from "./worker-entity";
import {WarEntity} from "./war-entity";
import {UserEntity} from "./user-entity";

@Entity("Clan")
export class ClanEntity extends BaseEntity{
    @PrimaryGeneratedColumn("uuid",{
        name : "ClanID"
    })clanId : string = ""
    @Column({
        name : "ClanName",
        type : "nvarchar"
    })clanName: string = ""

    @OneToMany(
        ()=>HeroEntity ,
        (hero)=>hero.clanFk
    )army: HeroEntity[]
    @OneToMany(
        ()=>FoodEntity ,
        (food)=>food.clanFk
    )foods: FoodEntity[]

    @OneToMany(
        ()=>WorkerEntity,
        (worker)=>worker.clanFk
    )workers: WorkerEntity[]

    @ManyToMany(
        ()=>WarEntity
    )@JoinTable({
        name:"WarResult",
        joinColumn:{
            name:"ClanFK",
            referencedColumnName:"clanId"

        },
        inverseJoinColumn:{
            name:"WarFK",
            referencedColumnName:"warId"
        }
    })wars:WarEntity[]
    @ManyToMany(
        ()=>UserEntity
    )@JoinTable({
        name: "UserClans",
        joinColumn:{
            name: "ClanFK",
            referencedColumnName: "clanId"
        },
        inverseJoinColumn:{
            name: "UserFK",
            referencedColumnName: "userId"
        }
    })users:UserEntity[]
}