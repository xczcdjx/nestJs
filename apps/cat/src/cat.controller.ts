import { Body, Controller, Get, Post, Query, Req } from "@nestjs/common";
import { CatService } from './cat.service';

@Controller()
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getHello(@Query() q:object): string {
    console.log(q);
    return this.catService.getHello();
  }
  // @Post(":id")
  setHello(@Body() body:object, @Req() req: any) {
    console.log(body,req.query,req.params);
    return "set"
  }
}
