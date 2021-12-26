import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
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

    @ManyToMany(
        ()=>ClanEntity
    )@JoinTable({
        name:"UserClans",
        joinColumn:{
            name: "UserFK",
            referencedColumnName: "userId"
        },
        inverseJoinColumn:{
            name:"ClanFK",
            referencedColumnName:"clanId"
        }
    })clans : ClanEntity[]
}