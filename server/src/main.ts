import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3030;

  if (process.env.NODE_ENV === 'production') {
    app.enableCors({
      origin: '*', // 실제 배포주소 ["https://..."]
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      credentials: true,
      allowedHeaders: ['Origin', 'Content-Type', 'Authorization'],
    });
  } else {
    app.enableCors({
      origin: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      credentials: true,
      allowedHeaders: ['Origin', 'Content-Type', 'Authorization'],
    });
  }

  await app.listen(port);
  console.log(`http://localhost:${port}`);
}
bootstrap();
