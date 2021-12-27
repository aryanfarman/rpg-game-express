import {UserEntity} from "../entities/user-entity";
import {ClanEntity} from "../entities/clan-entity";


export class UserService{
    async insert(data:UserEntity){
        const user = await UserEntity.create(data)
        return await user.save();

    }
    async find(id:string){
        return await UserEntity.findOne(id,{
            relations:["clans"]
        });
    }
    async addClan(user:UserEntity,clan:ClanEntity){
        if(user.clans != undefined){
            user.clans.push(clan)
        }else {
            user.clans = [clan]
        }
        return await user.save()

    }
    async delete(id:string){
        return await UserEntity.delete(id)
    }


}