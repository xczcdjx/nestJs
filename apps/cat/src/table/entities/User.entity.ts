import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile.entity";
import { Role } from "./Role.entity";

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
  @ManyToOne(() => Role, (r) => r.users)
  role: Role;
}
