import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';

import { VersionsModule } from './versions/versions.module';
import { TestamentsModule } from './testaments/testaments.module';
import { DatabaseModule } from './database/database.module';
import { VersesModule } from './verses/verses.module';

@Module({
  imports: [
    DatabaseModule,
    BooksModule,
    VersionsModule,
    TestamentsModule,
    VersesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
