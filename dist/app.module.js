"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const roles_module_1 = require("./roles/roles.module");
const auth_module_1 = require("./auth/auth.module");
const news_module_1 = require("./news/news.module");
const games_module_1 = require("./games/games.module");
const ratings_module_1 = require("./ratings/ratings.module");
const tags_module_1 = require("./tags/tags.module");
const platforms_module_1 = require("./platforms/platforms.module");
const genres_module_1 = require("./genres/genres.module");
const studios_module_1 = require("./studios/studios.module");
const comments_module_1 = require("./comments/comments.module");
const tag_model_1 = require("./tags/tag.model");
const news_model_1 = require("./news/news.model");
const game_model_1 = require("./games/game.model");
const role_model_1 = require("./roles/role.model");
const user_model_1 = require("./users/user.model");
const rating_model_1 = require("./ratings/rating.model");
const platform_model_1 = require("./platforms/platform.model");
const genre_model_1 = require("./genres/genre.model");
const studio_model_1 = require("./studios/studio.model");
const comment_model_1 = require("./comments/comment.model");
const game_platforms_model_1 = require("./games/game-platforms.model");
const game_studios_model_1 = require("./games/game-studios.model");
const game_publishers_model_1 = require("./games/game-publishers.model");
const game_genres_model_1 = require("./games/game-genres.model");
const news_tags_model_1 = require("./tags/news-tags.model");
const images_module_1 = require("./images/images.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [user_model_1.User, role_model_1.Role, news_model_1.News, game_model_1.Game, rating_model_1.Rating, tag_model_1.Tag, platform_model_1.Platform, genre_model_1.Genre, studio_model_1.Studio, comment_model_1.Comment, game_platforms_model_1.GamePlatforms, game_studios_model_1.GameStudios, game_publishers_model_1.GamePublishers, game_genres_model_1.GameGenres, news_tags_model_1.NewsTags],
                autoLoadModels: true
            }),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            news_module_1.NewsModule,
            games_module_1.GamesModule,
            ratings_module_1.RatingsModule,
            tags_module_1.TagsModule,
            platforms_module_1.PlatformsModule,
            genres_module_1.GenresModule,
            studios_module_1.StudiosModule,
            comments_module_1.CommentsModule,
            images_module_1.ImagesModule,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map