import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('stand')
export class Stand {
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  item:string
  @Column({
    type:'boolean'
  })
  done:boolean
}

