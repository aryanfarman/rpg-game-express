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
exports.SoldierEntity = void 0;
const typeorm_1 = require("typeorm");
const hero_entity_1 = require("./hero-entity");
let SoldierEntity = class SoldierEntity extends hero_entity_1.HeroEntity {
    constructor() {
        super(...arguments);
        this.Sword = 1;
    }
};
__decorate([
    (0, typeorm_1.Column)({
        name: "SoldierSword",
        type: "int",
        default: 1
    }),
    __metadata("design:type", Number)
], SoldierEntity.prototype, "Sword", void 0);
SoldierEntity = __decorate([
    (0, typeorm_1.Entity)("Soldier")
], SoldierEntity);
exports.SoldierEntity = SoldierEntity;
