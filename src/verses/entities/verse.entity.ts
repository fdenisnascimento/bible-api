import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'verses' })
export class Verse {
  @PrimaryColumn()
  id: number;

  @Column()
  version_id: number;

  @Column()
  book_id: number;

  @Column()
  chapter: number;

  @Column()
  number: number;

  @Column()
  text: string;
}
