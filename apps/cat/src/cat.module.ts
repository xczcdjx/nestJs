import { Global, Module } from "@nestjs/common";
import { CatController } from "./cat.controller";
import { CatService } from "./cat.service";
import { StandModule } from "./stand/stand.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Stand } from "./stand/entities/stand.entity";
import { AuthModule } from './auth/auth.module';
import { TableModule } from './table/table.module';
import { Profile } from "./table/entities/Profile.entity";
import { User } from "./table/entities/User.entity";
@Global()
@Module({
  imports: [StandModule, TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "987654",
    database: "todo",
    synchronize: true,
    autoLoadEntities:true,
    retryDelay:500,
    retryAttempts:10,
    logging:true
  }), TypeOrmModule.forFeature([Stand,User,Profile]), AuthModule, TableModule],
  controllers: [CatController],
  providers: [CatService],
  exports: [TypeOrmModule.forFeature([Stand,User,Profile])]
})
export class CatModule {
}
