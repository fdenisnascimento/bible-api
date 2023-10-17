import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Verse } from './entities/verse.entity';
import { Book } from 'src/books/entities/book.entity';

import { debug } from 'console';

@Injectable()
export class VersesService {
  constructor(
    @InjectRepository(Verse)
    private repository: Repository<Verse>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  async findRandom(version_id: number) {
    const verse = await this.repository
      .createQueryBuilder('verses')
      .select()
      .where('verses.version_id = :version_id', { version_id })
      .orderBy('RAND()')
      .take(1)
      .getOne();

    const _book = await this.bookRepository.findOneBy({ id: verse.book_id });

    return {
      book: {
        abbrev: {
          pt: _book.abrev,
        },
        name: _book.name,
        author: '',
        version: 'nvi',
      },

      chapter: verse.chapter,
      text: verse.text,
      number: verse.number,
    };
  }

  async findByVersionBookChapter(
    version: number,
    book: number,
    chapter: number,
  ) {
    const _book = await this.bookRepository.findOneBy({ id: book });
    const verses = await this.repository.find({
      select: {
        number: true,
        text: true,
      },
      where: {
        version_id: version,
        book_id: book,
        chapter: chapter,
      },
    });
    return {
      book: {
        abbrev: {
          pt: _book.abrev,
        },
        name: _book.name,
        author: '',
        version: 'nvi',
      },
      chapter: {
        number: Number(chapter),
        verses: _book.chapters,
      },
      verses: verses,
    };
  }

  async findByVersionAndWord(version_id: number, search: string) {
    const verses = await this.repository.find({
      where: {
        version_id: version_id,
        text: Like(`%${search}%`),
      },
    });

    try {
      const listOfVerses = [];

      for (const verse of verses) {
        const book = await this.getBook(verse.book_id);
        listOfVerses.push({
          book: book,
          chapter: verse.chapter,
          text: verse.text,
          number: verse.number,
        });
      }
      return listOfVerses;
    } catch (error) {
      debug('error');
    }
  }

  async getBook(id: number) {
    return await this.bookRepository.findOneBy({
      id: id,
    });
  }
}
