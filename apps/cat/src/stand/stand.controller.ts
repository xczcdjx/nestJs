import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { StandService } from "./stand.service";
import { CreateStandDto } from "./dto/create-stand.dto";
import { UpdateStandDto } from "./dto/update-stand.dto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuth } from "../guard/jwt-auth";
@ApiBearerAuth()
@ApiTags('stand')
@Controller("stand")
export class StandController {
  constructor(private readonly standService: StandService) {
  }

  @ApiOperation({summary:'增'})
  @Post()
  create(@Body() createStandDto: CreateStandDto) {
    return this.standService.create(createStandDto);
  }

  @ApiOperation({summary:'查'})
  @UseGuards(JwtAuth)
  @Get()
  findAll() {
    return this.standService.findAll();
  }
  @Get(':id')
  findOne(@Param("id") id: string) {
    return this.standService.findOne(+id);
  }

  @ApiOperation({summary:'改'})
  @Patch()
  update(@Body() updateStandDto: UpdateStandDto) {
    return this.standService.update(updateStandDto);
  }

  @ApiOperation({summary:'删'})
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.standService.remove(+id);
  }
}
