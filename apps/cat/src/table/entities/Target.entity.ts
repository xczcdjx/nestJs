import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity("target")
export class Target{
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type:'varchar',
    length:15
  })
  name:string
  @Column()
  type: string;
  @ManyToMany(()=>User, (u)=>u.targets)
  /*
  * 多对多是JoinTable()
  * 注意，反向关系没有@JoinTable。 @JoinTable必须只在关系的一边
  * */
  @JoinTable()
  users:User[]
}
