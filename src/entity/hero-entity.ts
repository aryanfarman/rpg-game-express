import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    TableInheritance
} from "typeorm";
import {ClanEntity} from "./clan-entity";
@Entity("Hero")
export class HeroEntity extends BaseEntity{
    @PrimaryGeneratedColumn("uuid",{
        name : "HeroID"
    })heroId : string
    @Column({
        name : "HeroName",
        type : "nvarchar"
    })heroName: string
    @Column({
        name : "HeroXP",
        type : "int",
        default : 10
    })heroXP : number
    @Column({
        name : "HeroHealth",
        type : "int",
        default : 100
    })heroHealth : number
    @Column({
        name : "HeroStrength",
        type : "int",
        default : 20
    })heroStrength : number
    @ManyToOne(()=>ClanEntity , (clan)=>clan.army,{
        onDelete : "SET NULL"
    })
    @JoinColumn({
        name:"ClanFK"
    })clanFk: ClanEntity;





}