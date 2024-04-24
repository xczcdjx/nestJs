import { Module } from '@nestjs/common';
import { StandService } from './stand.service';
import { StandController } from './stand.controller';

@Module({
  controllers: [StandController],
  providers: [StandService],
})
export class StandModule {}
