import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Movie {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'int', nullable: true, width: 4 })
  releaseYear: number;

  @Column({ type: 'int', nullable: true })
  rating: number;

}
