import {UserEntity} from "../entities/user-entity";
import {ClanEntity} from "../entities/clan-entity";


export class UserService{
    async insert(data:UserEntity){
        const user = UserEntity.create(data)
        const res =await user.save()
        return res;

    }
    async find(id:string){
        const user = UserEntity.findOne(id)
        return user;
    }
    async addClan(user:UserEntity,clan:ClanEntity){
        if(!user.clans){
            user.clans.push(clan)
        }else {
            user.clans = [clan]
        }
        const res= await user.save()
        return res

    }


}