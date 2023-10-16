import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api/v1');

  //  use alternate localhost and the port Heroku assigns to $PORT
  const host = '0.0.0.0';
  const port = process.env.PORT || 3000;
  app.listen(port, host, function () {
    console.log('Server started: ' + host + 'port: ' + port);
    console.log('database_host:' + process.env.DATABASE_HOST);
    console.log('database_name:' + process.env.DATABASE_NAME);
  });
}
bootstrap();
