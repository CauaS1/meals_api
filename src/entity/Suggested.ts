import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Suggested {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: ['Light Meal', 'Medium Meal','Fiber Meal']
  })
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

  @Column({ type: 'timestamptz' })
  breakfast_time: Date;

  @Column({ type: 'timestamptz' })
  lunch_time: Date;

  @Column({ type: 'timestamptz' })
  snack_time: Date;

  @Column({ type: 'timestamptz' })
  dinner_time: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}