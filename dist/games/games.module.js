"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesModule = void 0;
const common_1 = require("@nestjs/common");
const games_controller_1 = require("./games.controller");
const games_service_1 = require("./games.service");
const game_model_1 = require("./game.model");
const sequelize_1 = require("@nestjs/sequelize");
const platform_model_1 = require("../platforms/platform.model");
const genre_model_1 = require("../genres/genre.model");
const studio_model_1 = require("../studios/studio.model");
const game_platforms_model_1 = require("./game-platforms.model");
const game_studios_model_1 = require("./game-studios.model");
const game_publishers_model_1 = require("./game-publishers.model");
const game_genres_model_1 = require("./game-genres.model");
let GamesModule = class GamesModule {
};
GamesModule = __decorate([
    common_1.Module({
        controllers: [games_controller_1.GamesController],
        providers: [games_service_1.GamesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([game_model_1.Game, platform_model_1.Platform, genre_model_1.Genre, studio_model_1.Studio, game_platforms_model_1.GamePlatforms, game_studios_model_1.GameStudios, game_publishers_model_1.GamePublishers, game_genres_model_1.GameGenres])
        ]
    })
], GamesModule);
exports.GamesModule = GamesModule;
//# sourceMappingURL=games.module.js.map