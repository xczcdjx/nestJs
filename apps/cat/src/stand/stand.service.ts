import { Injectable } from "@nestjs/common";
import { CreateStandDto } from "./dto/create-stand.dto";
import { UpdateStandDto } from "./dto/update-stand.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Stand } from "./entities/stand.entity";
import { Repository } from "typeorm";

@Injectable()
export class StandService {
  constructor(
    @InjectRepository(Stand) private standEntity: Repository<Stand>
  ) {
  }

  create(createStandDto: CreateStandDto) {
    return this.standEntity.save(createStandDto);
    // return "This action adds a new stand";
  }

  findAll() {
    return this.standEntity.find();
  }

  async findOne(id: number) {
    const r=await this.standEntity.findBy({ id })
    return r[0];
  }

  update(u: UpdateStandDto) {
    return this.standEntity.update({ id: u.id }, {
      done: u.done as any,
      item: u.item
    });
  }

  remove(id: number) {
    return this.standEntity.delete({ id });
  }
}
