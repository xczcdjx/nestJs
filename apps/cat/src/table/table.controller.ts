import { Body, Controller, Get, Post } from "@nestjs/common";
import { TableService } from './table.service';
import { UserDto } from "./dto/User";

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}
  @Post()
  create(@Body() body:UserDto){
    return this.tableService.create(body)
  }
  @Get()
  findAll(){
    return this.tableService.findAll()
  }
}
