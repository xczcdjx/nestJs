import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile.entity";
import { Role } from "./Role.entity";
import { Target } from "./Target.entity";

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
  @ManyToMany(()=>Target, (t)=>t.users)
  targets: Target[];
}
