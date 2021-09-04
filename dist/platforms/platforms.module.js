"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformsModule = void 0;
const common_1 = require("@nestjs/common");
const platforms_service_1 = require("./platforms.service");
const platforms_controller_1 = require("./platforms.controller");
const sequelize_1 = require("@nestjs/sequelize");
const platform_model_1 = require("./platform.model");
const game_model_1 = require("../games/game.model");
const game_platforms_model_1 = require("../games/game-platforms.model");
let PlatformsModule = class PlatformsModule {
};
PlatformsModule = __decorate([
    common_1.Module({
        controllers: [platforms_controller_1.PlatformsController],
        providers: [platforms_service_1.PlatformsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([platform_model_1.Platform, game_model_1.Game, game_platforms_model_1.GamePlatforms])
        ]
    })
], PlatformsModule);
exports.PlatformsModule = PlatformsModule;
//# sourceMappingURL=platforms.module.js.map