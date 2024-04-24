import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateStandDto {
  @IsNotEmpty()
  @IsBoolean()
  done:boolean
  @IsNotEmpty()
  @IsString()
  item:string
}
