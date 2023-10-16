import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'testaments' })
export class Testament {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
