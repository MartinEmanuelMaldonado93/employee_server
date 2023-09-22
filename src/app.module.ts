import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { configParse } from './envs/env.validation';
import { config } from './envs/envs.config';
import { EnvsModule } from './envs/envs.module';
import { databaseConfig } from './envs/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // isGlobal: true,
      cache: true,
      load: [config, databaseConfig],
      validate: configParse,
    }),
    EmployeeModule,
    EnvsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
