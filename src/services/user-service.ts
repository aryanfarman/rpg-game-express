import {UserEntity} from "../entities/user-entity";


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


}