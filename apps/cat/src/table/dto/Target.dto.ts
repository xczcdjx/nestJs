import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class TargetDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  type: string;
  @ApiProperty({ description: "学生Id", type: "array", items: { type: "number" } })
  @IsArray({})
  @ArrayNotEmpty()
  @Type(() => Number)
  users: number[];
}
