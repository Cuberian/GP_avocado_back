"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudiosModule = void 0;
const common_1 = require("@nestjs/common");
const studios_service_1 = require("./studios.service");
const studios_controller_1 = require("./studios.controller");
const sequelize_1 = require("@nestjs/sequelize");
const studio_model_1 = require("./studio.model");
const game_publishers_model_1 = require("../games/game-publishers.model");
const game_studios_model_1 = require("../games/game-studios.model");
const game_model_1 = require("../games/game.model");
let StudiosModule = class StudiosModule {
};
StudiosModule = __decorate([
    common_1.Module({
        providers: [studios_service_1.StudiosService],
        controllers: [studios_controller_1.StudiosController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([studio_model_1.Studio, game_model_1.Game, studio_model_1.Studio, game_publishers_model_1.GamePublishers, game_studios_model_1.GameStudios])
        ]
    })
], StudiosModule);
exports.StudiosModule = StudiosModule;
//# sourceMappingURL=studios.module.js.map