import { Injectable } from "@nestjs/common";
import { CreateSchoolDto } from "./dto/create-school.dto";
import { UpdateSchoolDto } from "./dto/update-school.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TeaStuEntity } from "./views/tea_stu.entity";
import { Repository } from "typeorm";

@Injectable()
export class SchoolService {
  constructor(
    // @InjectRepository(TeaStuEntity) private readonly teaStuRepository: Repository<TeaStuEntity>
  ) {
  }

  create(createSchoolDto: CreateSchoolDto) {
    return "This action adds a new school";
  }

  findAll() {
    // return this.teaStuRepository.find();
    return ""
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
