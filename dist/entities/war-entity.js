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
exports.WarEntity = void 0;
const typeorm_1 = require("typeorm");
const clan_entity_1 = require("./clan-entity");
let WarEntity = class WarEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment", {
        name: "WarID"
    }),
    __metadata("design:type", Number)
], WarEntity.prototype, "warId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "warLocation",
        type: "nvarchar"
    }),
    __metadata("design:type", String)
], WarEntity.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => clan_entity_1.ClanEntity),
    (0, typeorm_1.JoinTable)({
        name: "WarResult",
        joinColumn: {
            name: "WarFK",
            referencedColumnName: "warId"
        },
        inverseJoinColumn: {
            name: "ClanFK",
            referencedColumnName: "clanId"
        }
    }),
    __metadata("design:type", Array)
], WarEntity.prototype, "clans", void 0);
WarEntity = __decorate([
    (0, typeorm_1.Entity)("Wars")
], WarEntity);
exports.WarEntity = WarEntity;
