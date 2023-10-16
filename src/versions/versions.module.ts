import { Module } from '@nestjs/common';
import { VersionsService } from './versions.service';
import { VersionsController } from './versions.controller';
import { Version } from './entities/version.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Version])],
  controllers: [VersionsController],
  providers: [VersionsService],
})
export class VersionsModule {}
