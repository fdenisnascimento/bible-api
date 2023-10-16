import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'versions' })
export class Version {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
