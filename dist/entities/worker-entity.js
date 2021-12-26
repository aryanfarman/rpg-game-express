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
exports.WorkerEntity = void 0;
const typeorm_1 = require("typeorm");
const clan_entity_1 = require("./clan-entity");
let WorkerEntity = class WorkerEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment", {
        name: "WorkerID"
    }),
    __metadata("design:type", Number)
], WorkerEntity.prototype, "workerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clan_entity_1.ClanEntity, (clan) => clan.workers),
    (0, typeorm_1.JoinColumn)({
        name: "ClanFK"
    }),
    __metadata("design:type", clan_entity_1.ClanEntity)
], WorkerEntity.prototype, "clanFk", void 0);
WorkerEntity = __decorate([
    (0, typeorm_1.Entity)("Worker")
], WorkerEntity);
exports.WorkerEntity = WorkerEntity;
