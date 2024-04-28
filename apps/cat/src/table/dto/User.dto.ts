import { IsBoolean, IsIn, IsNotEmpty, IsString } from "class-validator";

export class UserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsIn([0,1])
  sex: boolean;
  @IsNotEmpty()
  @IsString()
  account: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  email: string;
}
