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
<<<<<<< HEAD
//  Lets make a new changes and then commit again
// again push this in new master branch

// temp commit
=======
// (MAIN) Today is the video for the GITTTT
// (MAIN) Changes 5th for another commitgit 

// main commit
>>>>>>> 3f1f3412f22eca6c862db7e7c649b41220ab7090
