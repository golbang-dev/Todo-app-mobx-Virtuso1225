import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // 선언된 이하부터 model 이 시작한다는 의미
// Entity 의 속성을 Column 형식으로 표현
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
  })
  userId: string;

  @Column()
  userPassword: string;
}

export default User;
