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
exports.Game = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const platform_model_1 = require("../platforms/platform.model");
const game_platforms_model_1 = require("./game-platforms.model");
const game_publishers_model_1 = require("./game-publishers.model");
const studio_model_1 = require("../studios/studio.model");
const game_studios_model_1 = require("./game-studios.model");
const game_genres_model_1 = require("./game-genres.model");
const genre_model_1 = require("../genres/genre.model");
let Game = class Game extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Game.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Game.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Game.prototype, "release_date", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => platform_model_1.Platform, () => game_platforms_model_1.GamePlatforms),
    __metadata("design:type", Array)
], Game.prototype, "platforms", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => studio_model_1.Studio, () => game_publishers_model_1.GamePublishers),
    __metadata("design:type", Array)
], Game.prototype, "publishers", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => studio_model_1.Studio, () => game_studios_model_1.GameStudios),
    __metadata("design:type", Array)
], Game.prototype, "studios", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => genre_model_1.Genre, () => game_genres_model_1.GameGenres),
    __metadata("design:type", Array)
], Game.prototype, "genres", void 0);
Game = __decorate([
    sequelize_typescript_1.Table({ tableName: 'games' })
], Game);
exports.Game = Game;
//# sourceMappingURL=game.model.js.map