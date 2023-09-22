import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  imports: [ConfigModule],
})
export class EmployeeModule {}
