import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Verse } from 'src/verses/entities/verse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Verse])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
