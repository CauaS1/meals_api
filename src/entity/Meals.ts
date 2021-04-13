import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToMany, ManyToOne, JoinTable, JoinColumn,  } from 'typeorm';
import { Users } from './Users';

@Entity()
export class Meals {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  title: string;

  @Column({
    default: 0
  })
  rated: number;

  @Column()
  breakfast: string;

  @Column()
  lunch: string;

  @Column()
  snack: string;

  @Column()
  dinner: string;

  @Column()
  total_calories: number;

  @Column({ type: 'time' })
  breakfast_time: Date;

  @Column({ type: 'time' })
  lunch_time: Date;

  @Column({ type: 'time' })
  snack_time: Date;

  @Column({ type: 'time' })
  dinner_time: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Users, users => users.meals, {
    cascade: true,
    eager: true
  })
  @JoinColumn()
  users: Users;
}

