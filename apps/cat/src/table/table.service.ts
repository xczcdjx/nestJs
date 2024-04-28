import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/User.entity";
import { In, Repository } from "typeorm";
import { Profile } from "./entities/Profile.entity";
import { UserDto } from "./dto/User.dto";
import { Role } from "./entities/Role.entity";
import { Target } from "./entities/Target.entity";
import { TargetDto } from "./dto/Target.dto";

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
    @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
    @InjectRepository(Target) private readonly targetRepository: Repository<Target>
  ) {
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

  findTarget(id: number) {
    // return this.targetRepository.findOne({ where: { id }, relations: ["users"] });
    return this.targetRepository.createQueryBuilder("target")
      .where("target.id= :id", { id })
      .leftJoinAndSelect("target.users", "users")
      .getMany();
  }

  async createT(b: any) {
    const u = new User();
    u.name = b.name;
    u.sex = b.sex;
    await this.userRepository.save(u);
    const u2 = new User();
    u2.name = b.name;
    u2.sex = b.sex;
    await this.userRepository.save(u2);
    const tar = new Target();
    tar.name = b.name + "tar";
    tar.users = [u, u2];
    console.log(tar.users);
    tar.type = "temp";
    await this.targetRepository.save(tar);
    return "绑定成功";
  }

  async createTS(b: TargetDto) {
    // 批量插入
    /*await this.targetRepository.save({
      ...b, name: b.title,
      users: await this.userRepository.find({
        where: { id: In(b.users) }
      })
    });*/
    let users = [];
    for (const user of b.users) {
      let r = await this.userRepository.findOne({ where: { id: user } });
      users.push(r);
    }
    console.log(users);
    const tar = new Target();
    tar.name = b.title;
    tar.type = b.type;
    tar.users = users;
    await this.targetRepository.save(tar);
    return b;
  }
}
