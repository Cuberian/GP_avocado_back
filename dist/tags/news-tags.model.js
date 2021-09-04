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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsTags = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const news_model_1 = require("../news/news.model");
const tag_model_1 = require("./tag.model");
let NewsTags = class NewsTags extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], NewsTags.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => news_model_1.News),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, onDelete: 'CASCADE' }),
    __metadata("design:type", Number)
], NewsTags.prototype, "newsId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => tag_model_1.Tag),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false, onDelete: 'CASCADE' }),
    __metadata("design:type", Number)
], NewsTags.prototype, "tagId", void 0);
NewsTags = __decorate([
    sequelize_typescript_1.Table({ tableName: 'news_tags', createdAt: false, updatedAt: false })
], NewsTags);
exports.NewsTags = NewsTags;
//# sourceMappingURL=news-tags.model.js.map