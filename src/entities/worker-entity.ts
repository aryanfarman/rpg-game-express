import {BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClanEntity} from "./clan-entity";

@Entity("Worker")
export class WorkerEntity extends BaseEntity{
    @PrimaryGeneratedColumn("uuid",{
        name:"WorkerID"
    })workerId : string
    @ManyToOne(()=>ClanEntity,
        (clan)=>clan.workers
    )@JoinColumn({
        name : "ClanFK"
    })clanFk : ClanEntity


}