import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from './auth.service';
import {AuthLoginDto } from "./dto/Auth";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }
  @ApiOperation({summary:'login'})
  @Post('/login')
  login(@Body() body: AuthLoginDto) {
    return this.authService.login(body)
  }
}
