"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_entity_1 = require("../entity/user-entity");
const typeorm_1 = require("typeorm");
class UserService {
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_entity_1.UserEntity.create(data);
            return yield user.save();
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_entity_1.UserEntity.findOne(id, {
                relations: ["clans"]
            });
        });
    }
    updateUser(userId, userName, userMail) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_entity_1.UserEntity.findOne(userId, {
                relations: ["clans"]
            });
            user.name = userName;
            user.email = userMail;
            return yield user.save();
        });
    }
    addClan(user, clan) {
        return __awaiter(this, void 0, void 0, function* () {
            if (user.clans != undefined) {
                user.clans.push(clan);
            }
            else {
                user.clans = [clan];
            }
            return yield user.save();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_entity_1.UserEntity.delete(id);
        });
    }
    findAll(userName, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userName && !userId) {
                return yield user_entity_1.UserEntity.find({
                    where: {
                        name: (0, typeorm_1.Like)(`%${userName}%`)
                    },
                    relations: ["clans"]
                });
            }
            else if (!userName && !userId) {
                return yield user_entity_1.UserEntity.find({
                    where: {
                        name: (0, typeorm_1.Like)(`%%`)
                    },
                    relations: ["clans"]
                });
            }
            else {
                return yield user_entity_1.UserEntity.find({
                    where: {
                        userId: userId
                    },
                    relations: ["clans"]
                });
            }
        });
    }
}
exports.UserService = UserService;
