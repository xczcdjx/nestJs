import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  sex: string;
  @OneToOne(() => Profile, p => p.user)
  profile: Profile;
}
