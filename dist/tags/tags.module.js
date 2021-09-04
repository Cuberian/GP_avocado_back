"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsModule = void 0;
const common_1 = require("@nestjs/common");
const tags_controller_1 = require("./tags.controller");
const tags_service_1 = require("./tags.service");
const sequelize_1 = require("@nestjs/sequelize");
const tag_model_1 = require("./tag.model");
const news_tags_model_1 = require("./news-tags.model");
const news_model_1 = require("../news/news.model");
let TagsModule = class TagsModule {
};
TagsModule = __decorate([
    common_1.Module({
        controllers: [tags_controller_1.TagsController],
        providers: [tags_service_1.TagsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([tag_model_1.Tag, news_model_1.News, news_tags_model_1.NewsTags])
        ],
        exports: [
            tags_service_1.TagsService
        ]
    })
], TagsModule);
exports.TagsModule = TagsModule;
//# sourceMappingURL=tags.module.js.map