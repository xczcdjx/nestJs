import { PartialType } from '@nestjs/mapped-types';
import { CreateStandDto } from './create-stand.dto';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class UpdateStandDto{
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  id:number
  @IsOptional()
  @IsString()
  item:string
  @IsOptional()
  @IsBoolean()
  done:string
}
