import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'books' })
export class Book {
  @PrimaryColumn()
  id: number;

  @Column()
  testament_id: number;

  @Column()
  position: number;

  @Column()
  name: string;

  @Column()
  abrev: string;
}
