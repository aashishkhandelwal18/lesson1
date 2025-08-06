import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
// import { ThrottleModule , ThrottleGuard } from '@nestjs/throttle';
import { APP_GUARD } from '@nestjs/core';

import { Logger } from '@nestjs/common'
import { MyLoggerModule } from './my-logger/my-logger.module';


@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule, MyLoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


<<<<<<< HEAD
// v6
=======
// temp changes
// hello
>>>>>>> c1d611712d57d5f2ca3cfcbce81cb253f0dec996
