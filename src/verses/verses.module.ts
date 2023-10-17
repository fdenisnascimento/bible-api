import { Module } from '@nestjs/common';
import { VersesService } from './verses.service';
import { VersesController } from './verses.controller';
import { Verse } from './entities/verse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/books/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Verse, Book])],
  controllers: [VersesController],
  providers: [VersesService],
})
export class VersesModule {}
