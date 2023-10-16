import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Verse } from './entities/verse.entity';

@Injectable()
export class VersesService {
  constructor(
    @InjectRepository(Verse)
    private repository: Repository<Verse>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  findByVersionBookChapter(version: number, book: number, chapter: number) {
    return this.repository.find({
      where: {
        version_id: version,
        book_id: book,
        chapter: chapter,
      },
    });
  }
}
