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


// v3