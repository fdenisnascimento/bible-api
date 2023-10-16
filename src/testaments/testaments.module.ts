import { Module } from '@nestjs/common';
import { Testament } from './entities/testament.entity';
import { TestamentsController } from './testaments.controller';
import { TestamentsService } from './testaments.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Testament])],
  controllers: [TestamentsController],
  providers: [TestamentsService],
})
export class TestamentsModule {}
