import { Module } from '@nestjs/common';
import * as typeorm from '@nestjs/typeorm';

@Module({
  imports: [
    typeorm.TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: Number(process.env.DATABASE_PORT),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        logging: ['error', 'migration', 'schema'],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
