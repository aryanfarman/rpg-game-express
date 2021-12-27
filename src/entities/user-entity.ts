import {BaseEntity, Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ClanEntity} from "./clan-entity";

@Entity("User")
export class UserEntity extends BaseEntity{
    @Column({
        name : "UserName",
        type : "nvarchar"
    })name:String
    @Column({
        name : "UserMail",
        type : "nvarchar"
    })email:String
    @PrimaryGeneratedColumn("uuid",{
        name: "UserID"
    })userId:String

    @OneToMany(
        ()=>ClanEntity,
        (clan)=> clan.userFk
    )clans : ClanEntity[]
}