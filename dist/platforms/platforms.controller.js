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
exports.PlatformsController = void 0;
const common_1 = require("@nestjs/common");
const create_platform_dto_1 = require("./dto/create-platform.dto");
const platforms_service_1 = require("./platforms.service");
let PlatformsController = class PlatformsController {
    constructor(platformsService) {
        this.platformsService = platformsService;
    }
    create(dto) {
        return this.platformsService.createPlatform(dto);
    }
    getByValue(title) {
        return this.platformsService.getPlatformByTitle(title);
    }
    getAll() {
        return this.platformsService.getAllPlatforms();
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_platform_dto_1.CreatePlatformDto]),
    __metadata("design:returntype", void 0)
], PlatformsController.prototype, "create", null);
__decorate([
    common_1.Get('/:title'),
    __param(0, common_1.Param('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlatformsController.prototype, "getByValue", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlatformsController.prototype, "getAll", null);
PlatformsController = __decorate([
    common_1.Controller('platforms'),
    __metadata("design:paramtypes", [platforms_service_1.PlatformsService])
], PlatformsController);
exports.PlatformsController = PlatformsController;
//# sourceMappingURL=platforms.controller.js.map