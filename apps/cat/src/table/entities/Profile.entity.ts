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
  @OneToOne(()=>User,user=>user.profile)
  @JoinColumn()
  user:User
}
