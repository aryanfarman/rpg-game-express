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
let ClanEntity = class ClanEntity {
    constructor() {
        this.clanId = "";
        this.clanName = "";
    }
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
ClanEntity = __decorate([
    (0, typeorm_1.Entity)("Clan")
], ClanEntity);
exports.ClanEntity = ClanEntity;
