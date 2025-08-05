import { NestFactory , HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';

import { MyLoggerService } from './my-logger/my-logger.service';
import { AllExceptionsFilter } from './all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useLogger(app.get(MyLoggerService))
  const { httpAdapter } = app.get(HttpAdapterHost)
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter))
  app.enableCors()
  app.setGlobalPrefix('api')
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
// (MAIN) Today is the video for the GITTTT
// (MAIN) Changes 1st for another commitgit 