import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "../strategy/jwt.strategy";
import { PassportModule } from "@nestjs/passport";
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: "test",
      signOptions: {
        expiresIn: "1d"
      }
    })
  ],
  controllers: [AuthController
  ],
  providers: [AuthService,JwtStrategy]
})
export class AuthModule {
}
