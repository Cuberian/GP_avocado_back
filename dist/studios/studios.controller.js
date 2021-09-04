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
exports.StudiosController = void 0;
const common_1 = require("@nestjs/common");
const studios_service_1 = require("./studios.service");
const create_studio_dto_1 = require("./dto/create-studio.dto");
let StudiosController = class StudiosController {
    constructor(studiosService) {
        this.studiosService = studiosService;
    }
    create(dto) {
        return this.studiosService.createStudio(dto);
    }
    getByValue(name) {
        return this.studiosService.getStudiosByName(name);
    }
    getAll() {
        return this.studiosService.getAllStudios();
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_studio_dto_1.CreateStudioDto]),
    __metadata("design:returntype", void 0)
], StudiosController.prototype, "create", null);
__decorate([
    common_1.Get('/:name'),
    __param(0, common_1.Param('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudiosController.prototype, "getByValue", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudiosController.prototype, "getAll", null);
StudiosController = __decorate([
    common_1.Controller('studios'),
    __metadata("design:paramtypes", [studios_service_1.StudiosService])
], StudiosController);
exports.StudiosController = StudiosController;
//# sourceMappingURL=studios.controller.js.map