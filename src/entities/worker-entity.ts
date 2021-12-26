import {BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClanEntity} from "./clan-entity";

@Entity("Worker")
export class WorkerEntity extends BaseEntity{
    @PrimaryGeneratedColumn("increment",{
        name:"WorkerID"
    })private workerId : number
    @ManyToOne(()=>ClanEntity,
        (clan)=>clan.workers
    )@JoinColumn({
        name : "ClanFK"
    })clanFk : ClanEntity


}