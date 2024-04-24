import { NestFactory } from '@nestjs/core';
import { CatModule } from './cat.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(CatModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true // 设置白名单不存在dto的属性将不会添加创建依赖
  }))
  await app.listen(3001);
}
bootstrap();
