import { Injectable } from '@nestjs/common';
import { CreateTestamentDto } from './dto/create-testament.dto';
import { UpdateTestamentDto } from './dto/update-testament.dto';
import { Testament } from './entities/testament.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TestamentsService {
  constructor(
    @InjectRepository(Testament)
    private repository: Repository<Testament>,
  ) {}
  create(createTestamentDto: CreateTestamentDto) {
    return 'This action adds a new testament';
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} testament`;
  }

  update(id: number, updateTestamentDto: UpdateTestamentDto) {
    return `This action updates a #${id} testament`;
  }

  remove(id: number) {
    return `This action removes a #${id} testament`;
  }
}
