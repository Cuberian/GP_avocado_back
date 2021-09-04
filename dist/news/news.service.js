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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const news_model_1 = require("./news.model");
const tags_service_1 = require("../tags/tags.service");
let NewsService = class NewsService {
    constructor(newsRepository, tagsService) {
        this.newsRepository = newsRepository;
        this.tagsService = tagsService;
    }
    async createNews(dto) {
        const { header, text, views, record_type, author_id, tags } = dto;
        const news = await this.newsRepository.create({ header, text, views, record_type, author_id });
        if (tags && tags.length > 0) {
            let tagsIdArray = [];
            for (const tag of tags) {
                const existTag = await this.tagsService.getByValue(tag);
                if (!existTag) {
                    const newTag = await this.tagsService.createTag({ value: tag });
                    tagsIdArray.push(newTag.id);
                    continue;
                }
                tagsIdArray.push(existTag.id);
            }
            await news.$set('tags', tagsIdArray);
        }
        return news;
    }
    async updateNews(dto) {
        const { newsId, header, text, tags } = dto;
        const news = await this.newsRepository.findByPk(newsId);
        const newNews = await news.update({ header, text });
        if (tags && tags.length > 0) {
            let tagsIdArray = [];
            for (const tag of tags) {
                const existTag = await this.tagsService.getByValue(tag);
                if (!existTag) {
                    const newTag = await this.tagsService.createTag({ value: tag });
                    tagsIdArray.push(newTag.id);
                    continue;
                }
                tagsIdArray.push(existTag.id);
            }
            await news.$set('tags', tagsIdArray);
        }
        else {
            await this.tagsService.deleteAllNewsTags(newsId);
        }
        return news;
    }
    async getNewsById(id) {
        return await this.newsRepository.findByPk(id, { include: { all: true } });
    }
    async deleteNewsById(id) {
        const news = await this.newsRepository.findByPk(id);
        return await news.destroy();
    }
    async getAllNews() {
        return await this.newsRepository.findAll();
    }
    async setCover(newsId, coverImage) {
        const news = await this.newsRepository.findByPk(newsId);
        return await news.update({ 'coverImage': coverImage });
    }
    async deleteCover(newsId) {
        const news = await this.newsRepository.findByPk(newsId);
        return await news.update({ 'coverImage': null });
    }
};
NewsService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(news_model_1.News)),
    __metadata("design:paramtypes", [Object, tags_service_1.TagsService])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map