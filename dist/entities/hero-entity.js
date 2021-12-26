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
exports.HeroEntity = void 0;
const typeorm_1 = require("typeorm");
let HeroEntity = class HeroEntity {
    constructor() {
        this.heroId = "";
        this.heroName = "";
        this.heroXP = 10;
        this.heroHealth = 100;
        this.heroStrength = 10;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid", {
        name: "HeroID"
    }),
    __metadata("design:type", String)
], HeroEntity.prototype, "heroId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "HeroName",
        type: "nvarchar"
    }),
    __metadata("design:type", String)
], HeroEntity.prototype, "heroName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "HeroXP",
        type: "int",
        default: 10
    }),
    __metadata("design:type", Number)
], HeroEntity.prototype, "heroXP", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "HeroHealth",
        type: "int",
        default: 100
    }),
    __metadata("design:type", Number)
], HeroEntity.prototype, "heroHealth", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "HeroStrength",
        type: "int"
    }),
    __metadata("design:type", Number)
], HeroEntity.prototype, "heroStrength", void 0);
HeroEntity = __decorate([
    (0, typeorm_1.Entity)("Hero")
], HeroEntity);
exports.HeroEntity = HeroEntity;
