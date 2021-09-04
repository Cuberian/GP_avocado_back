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
exports.Studio = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const game_studios_model_1 = require("../games/game-studios.model");
const game_model_1 = require("../games/game.model");
const game_publishers_model_1 = require("../games/game-publishers.model");
let Studio = class Studio extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Studio.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Studio.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => game_model_1.Game, () => game_studios_model_1.GameStudios),
    __metadata("design:type", Array)
], Studio.prototype, "developedGames", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => game_model_1.Game, () => game_publishers_model_1.GamePublishers),
    __metadata("design:type", Array)
], Studio.prototype, "publishedGames", void 0);
Studio = __decorate([
    sequelize_typescript_1.Table({ tableName: 'studios' })
], Studio);
exports.Studio = Studio;
//# sourceMappingURL=studio.model.js.map