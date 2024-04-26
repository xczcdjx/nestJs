import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/User.entity";
import { Repository } from "typeorm";
import { Profile } from "./entities/Profile.entity";
import { UserDto } from "./dto/User";

@Injectable()
export class TableService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
              @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>) {
  }

  create({ name, account, password, email }: UserDto) {
    const User = this.userRepository.save(
      { name, email, account});
  }

  findAll() {
    return this.userRepository.find({ relations: ["profile"] });
  }
}
