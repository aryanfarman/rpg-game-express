import {UserEntity} from "../entities/user-entity";
import {ClanEntity} from "../entities/clan-entity";


export class UserService{
    async insert(data:UserEntity){
        const user = UserEntity.create(data)
        return await user.save();

    }
    async find(id:string){
        return UserEntity.findOne(id);
    }
    async addClan(user:UserEntity,clan:ClanEntity){
        if(!user.clans){
            user.clans.push(clan)
        }else {
            user.clans = [clan]
        }
        return await user.save()

    }


}