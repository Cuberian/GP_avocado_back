import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
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
import { ImagesModule } from './images/images.module';

const developmentDbConfig: any = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: String(process.env.POSTGRES_PASSWORD),
  database: process.env.POSTGRES_DB,
  autoLoadModels: true,
};

const productionDbConfig: any = {
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: String(process.env.POSTGRES_PASSWORD),
  database: process.env.POSTGRES_DB,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  autoLoadModels: true,
};

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      autoLoadModels: true,
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
  ],
})
export class AppModule {}
