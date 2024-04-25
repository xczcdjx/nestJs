import { NestFactory } from "@nestjs/core";
import { CatModule } from "./cat.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";

async function bootstrap() {
  const app = await NestFactory.create(CatModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // 设置白名单不存在dto的属性将不会添加创建依赖
  }));
  const document = SwaggerModule.createDocument(app,
    new DocumentBuilder().addBearerAuth()
      .setTitle(`cat document`).setDescription(`cat document`)
      .setVersion("1").build());
  const theme = new SwaggerTheme();
  const options = {
    explorer: true,
    customCss: theme.getBuffer(SwaggerThemeNameEnum.FEELING_BLUE)
  };
  const options2 = {
    explorer: true,
    customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK)
  };
  SwaggerModule.setup("doc-l", app, document,options);
  SwaggerModule.setup("doc-d", app, document,options2);
  await app.listen(3001);
}

bootstrap();
