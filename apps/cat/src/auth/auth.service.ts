import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthLoginDto } from "./dto/Auth";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {
  }

  getToken(token: object) {
    return this.jwtService.sign(token);
  }

  login({ username, password }: AuthLoginDto) {

    const token = this.getToken({ id: 1, username });
    return {
      token
    };
  }
}
