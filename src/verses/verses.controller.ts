import { Controller, Get, Param } from '@nestjs/common';
import { VersesService } from './verses.service';

@Controller('verses')
export class VersesController {
  constructor(private readonly versesService: VersesService) {}

  @Get()
  findAll() {
    return this.versesService.findAll();
  }

  @Get(':version_id/:book_id/:chapter_id/')
  findByVersionBookChapter(
    @Param('version_id') version: number,
    @Param('book_id') book: number,
    @Param('chapter_id') chapter: number,
  ) {
    return this.versesService.findByVersionBookChapter(version, book, chapter);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.versesService.findOne(id);
  }

  @Get(':version_id/random')
  findRandom(@Param('version_id') version_id: number) {
    return this.versesService.findRandom(version_id);
  }
  @Get(':version_id/:search')
  findByVersionAndWord(
    @Param('version_id') version_id: number,
    @Param('search') search: string,
  ) {
    return this.versesService.findByVersionAndWord(version_id, search);
  }
}
