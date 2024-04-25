import { NestFactory } from "@nestjs/core";
import { CatModule } from "./cat.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(CatModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // 设置白名单不存在dto的属性将不会添加创建依赖
  }));
  const document = SwaggerModule.createDocument(app,
    new DocumentBuilder().addBearerAuth()
      .setTitle(`cat document`).setDescription(`cat document`)
      .setVersion("1").build());
  SwaggerModule.setup("doc", app, document);
  await app.listen(3001);
}

bootstrap();
