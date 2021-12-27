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
exports.FoodEntity = void 0;
const typeorm_1 = require("typeorm");
const clan_entity_1 = require("./clan-entity");
let FoodEntity = class FoodEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid", {
        name: "FoodID"
    }),
    __metadata("design:type", String)
], FoodEntity.prototype, "foodId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "FoodName",
        type: "varchar"
    }),
    __metadata("design:type", String)
], FoodEntity.prototype, "foodName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "FoodCalorie",
        type: "int"
    }),
    __metadata("design:type", Number)
], FoodEntity.prototype, "cal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clan_entity_1.ClanEntity, (clan) => clan.foods),
    (0, typeorm_1.JoinColumn)({
        name: "ClanFK"
    }),
    __metadata("design:type", clan_entity_1.ClanEntity)
], FoodEntity.prototype, "clanFk", void 0);
FoodEntity = __decorate([
    (0, typeorm_1.Entity)("Food")
], FoodEntity);
exports.FoodEntity = FoodEntity;
