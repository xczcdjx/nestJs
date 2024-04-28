import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  account: string;
  @Column()
  password: string;
  @Column()
  email: string;
  // 一对一
  @OneToOne(()=>User,user=>user.profile)
  // 对应外键所在的表
  @JoinColumn()
  user:User
}
