import { Column, Entity, PrimaryColumn } from 'typeorm';

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

  @Column({ nullable: true })
  chapters: number;

  @Column()
  abrev: string;
}
