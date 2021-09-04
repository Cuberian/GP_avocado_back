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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const tag_model_1 = require("./tag.model");
const news_tags_model_1 = require("./news-tags.model");
let TagsService = class TagsService {
    constructor(tagRepository, newsTagsRepository) {
        this.tagRepository = tagRepository;
        this.newsTagsRepository = newsTagsRepository;
    }
    async createTag(dto) {
        return await this.tagRepository.create(dto);
    }
    async getByValue(value) {
        return await this.tagRepository.findOne({ where: { value } });
    }
    async getAll() {
        return await this.tagRepository.findAll();
    }
    async deleteAllNewsTags(newsId) {
        return await this.newsTagsRepository.findAll({ where: { newsId } }).then(r => {
            for (const tag of r) {
                tag.destroy();
            }
        });
    }
};
TagsService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(tag_model_1.Tag)),
    __param(1, sequelize_1.InjectModel(news_tags_model_1.NewsTags)),
    __metadata("design:paramtypes", [Object, Object])
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map