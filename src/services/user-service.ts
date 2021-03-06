import {UserEntity} from "../entity/user-entity";
import {ClanEntity} from "../entity/clan-entity";
import {Like} from "typeorm";


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
    async updateUser(userId:string,userName:string,userMail:string){
        const user= await UserEntity.findOne(userId,{
            relations : ["clans"]
        })
        user.name=userName
        user.email=userMail
        return await user.save()

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
    async findAll(userName:string,userId: string){
        if(userName && !userId){
            return await UserEntity.find({
                where: {
                  name: Like(`%${userName}%`)
                },
                relations : ["clans"]
            })
        }else if(!userName&&!userId){
            return await UserEntity.find({
                where: {
                    name: Like(`%%`)
                },
                relations : ["clans"]
            })
        }else{
            return await UserEntity.find({
                where: {
                    userId: userId
                },
                relations : ["clans"]
            })
        }
    }

}