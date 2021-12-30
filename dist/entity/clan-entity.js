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
exports.ClanEntity = void 0;
const typeorm_1 = require("typeorm");
const hero_entity_1 = require("./hero-entity");
const food_entity_1 = require("./food-entity");
const worker_entity_1 = require("./worker-entity");
const war_entity_1 = require("./war-entity");
const user_entity_1 = require("./user-entity");
let ClanEntity = class ClanEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid", {
        name: "ClanID"
    }),
    __metadata("design:type", String)
], ClanEntity.prototype, "clanId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "ClanName",
        type: "nvarchar"
    }),
    __metadata("design:type", String)
], ClanEntity.prototype, "clanName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => hero_entity_1.HeroEntity, (hero) => hero.clanFk),
    __metadata("design:type", Array)
], ClanEntity.prototype, "army", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => food_entity_1.FoodEntity, (food) => food.clanFk),
    __metadata("design:type", Array)
], ClanEntity.prototype, "foods", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => worker_entity_1.WorkerEntity, (worker) => worker.clanFk),
    __metadata("design:type", Array)
], ClanEntity.prototype, "workers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => war_entity_1.WarEntity),
    (0, typeorm_1.JoinTable)({
        name: "WarResult",
        joinColumn: {
            name: "ClanFK",
            referencedColumnName: "clanId"
        },
        inverseJoinColumn: {
            name: "WarFK",
            referencedColumnName: "warId"
        }
    }),
    __metadata("design:type", Array)
], ClanEntity.prototype, "wars", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.clans, {
        onDelete: "SET NULL"
    }),
    (0, typeorm_1.JoinColumn)({
        name: "userFK"
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], ClanEntity.prototype, "userFk", void 0);
ClanEntity = __decorate([
    (0, typeorm_1.Entity)("Clan")
], ClanEntity);
exports.ClanEntity = ClanEntity;
