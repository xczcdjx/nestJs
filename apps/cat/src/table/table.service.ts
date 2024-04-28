import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/User.entity";
import { Repository } from "typeorm";
import { Profile } from "./entities/Profile.entity";
import { UserDto } from "./dto/User";
import { Role } from "./entities/Role.entity";

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
    @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>) {
  }

  create({ name, account, password, email }: UserDto) {
    const User = this.userRepository.save(
      { name, email, account });
  }

  findAll() {
    return this.userRepository.find({ relations: ["profile"] });
  }

  findUser(id: number) {
    // const r=this.userRepository.find({ where: { id },relations:['role','profile'] });
    const r = this.userRepository.createQueryBuilder("user")
      // 当id为undefined时会注入为null
      // .where("user.id= :id", { id }).getOne()
      // .where({id}).leftJoinAndSelect("user.profile","profile")
      .where({ id }).leftJoinAndSelect("user.profile", "profile")
      .leftJoinAndSelect("user.role", "role")
      .getMany()
    ;
    return r;
  }

  findRole(id: number) {
    return this.roleRepository.find({ where: { id }, relations: ["users"] });
  }
}
