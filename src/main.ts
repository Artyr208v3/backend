import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true });

  const config = new DocumentBuilder()
    .setTitle("Урок по продвинотому бэкенду")
    .setDescription("Документация по RestAPI")
    .setVersion("1.0.0")
    .addTag("ULBI TV")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
