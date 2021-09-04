import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { NewsModule } from './news/news.module';
import { GamesModule } from './games/games.module';
import { RatingsModule } from './ratings/ratings.module';
import { TagsModule } from './tags/tags.module';
import { PlatformsModule } from './platforms/platforms.module';
import { GenresModule } from './genres/genres.module';
import { StudiosModule } from './studios/studios.module';
import { CommentsModule } from './comments/comments.module';

import { Tag } from "./tags/tag.model";
import { News } from "./news/news.model";
import { Game } from "./games/game.model";
import { Role } from "./roles/role.model";
import { User } from "./users/user.model";
import { Rating } from "./ratings/rating.model";
import { Platform } from './platforms/platform.model';
import { Genre } from "./genres/genre.model";
import { Studio } from "./studios/studio.model";
import { Comment } from './comments/comment.model';
import { GamePlatforms } from "./games/game-platforms.model";
import { GameStudios } from "./games/game-studios.model";
import { GamePublishers } from "./games/game-publishers.model";
import { GameGenres } from "./games/game-genres.model";
import {NewsTags} from "./tags/news-tags.model";
import { ImagesModule } from './images/images.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, News, Game, Rating, Tag, Platform, Genre, Studio, Comment, GamePlatforms, GameStudios, GamePublishers, GameGenres, NewsTags],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        NewsModule,
        GamesModule,
        RatingsModule,
        TagsModule,
        PlatformsModule,
        GenresModule,
        StudiosModule,
        CommentsModule,
        ImagesModule,
    ]
})
export class AppModule {}
