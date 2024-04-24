import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { StandModule } from './stand/stand.module';

@Module({
  imports: [StandModule],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
