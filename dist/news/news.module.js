"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsModule = void 0;
const common_1 = require("@nestjs/common");
const news_service_1 = require("./news.service");
const news_controller_1 = require("./news.controller");
const sequelize_1 = require("@nestjs/sequelize");
const news_model_1 = require("./news.model");
const user_model_1 = require("../users/user.model");
const tag_model_1 = require("../tags/tag.model");
const news_tags_model_1 = require("../tags/news-tags.model");
const tags_module_1 = require("../tags/tags.module");
let NewsModule = class NewsModule {
};
NewsModule = __decorate([
    common_1.Module({
        providers: [news_service_1.NewsService],
        controllers: [news_controller_1.NewsController],
        imports: [
            tags_module_1.TagsModule,
            sequelize_1.SequelizeModule.forFeature([news_model_1.News, user_model_1.User, tag_model_1.Tag, news_tags_model_1.NewsTags])
        ]
    })
], NewsModule);
exports.NewsModule = NewsModule;
//# sourceMappingURL=news.module.js.map