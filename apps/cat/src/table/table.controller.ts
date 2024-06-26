import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { TableService } from './table.service';
import { UserDto } from "./dto/User.dto";
import { TargetDto } from "./dto/Target.dto";

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
  @Get('role')
  findRole(@Query('id') id: number) {
    return this.tableService.findRole(id)
  }
  @Get('user')
  findUser(@Query('id') id: number) {
    return this.tableService.findUser(id)
  }
  @Get('target')
  findTarget(@Query('id') id: number) {
    return this.tableService.findTarget(id)
  }
  // 全局创建
  @Post("target")
  createTarget(@Body() body:object){
    return this.tableService.createT(body)
  }
  // 单条创建
  @Post("targetS")
  createTargetS(@Body() body:TargetDto){
    return this.tableService.createTS(body)
  }
}
