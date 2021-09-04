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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudiosService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const studio_model_1 = require("./studio.model");
let StudiosService = class StudiosService {
    constructor(studioRepository) {
        this.studioRepository = studioRepository;
    }
    async createStudio(dto) {
        return await this.studioRepository.create(dto);
    }
    async getStudiosByName(name) {
        return await this.studioRepository.findOne({ where: { name } });
    }
    async getAllStudios() {
        return await this.studioRepository.findAll();
    }
};
StudiosService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(studio_model_1.Studio)),
    __metadata("design:paramtypes", [Object])
], StudiosService);
exports.StudiosService = StudiosService;
//# sourceMappingURL=studios.service.js.map