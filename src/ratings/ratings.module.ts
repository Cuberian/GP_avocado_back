import { Module } from '@nestjs/common';
import { RatingsController } from './ratings.controller';
import { RatingsService } from './ratings.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rating } from './rating.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [RatingsController],
  providers: [RatingsService],
  imports: [SequelizeModule.forFeature([Rating]), AuthModule],
})
export class RatingsModule {}
