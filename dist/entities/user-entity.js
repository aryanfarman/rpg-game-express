"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const clan_entity_1 = require("./clan-entity");
let UserEntity = class UserEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        name: "UserName",
        type: "nvarchar"
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "UserMail",
        type: "nvarchar"
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid", {
        name: "UserID"
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => clan_entity_1.ClanEntity),
    (0, typeorm_1.JoinTable)({
        name: "UserClans",
        joinColumn: {
            name: "UserFK",
            referencedColumnName: "userId"
        },
        inverseJoinColumn: {
            name: "ClanFK",
            referencedColumnName: "clanId"
        }
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "clans", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)("User")
], UserEntity);
exports.UserEntity = UserEntity;
