import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  // ManyToOne,
} from 'typeorm';

@Entity()
class TodoItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  TodoContent: string;

  @Column()
  checked: boolean;

  // @ManyToOne(() => TodoList, list => list.TodoList)
}
export default TodoItem;
