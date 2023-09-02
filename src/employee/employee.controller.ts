import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { delay, of } from 'rxjs';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    // services always uses EmployeeDto
    try {
      const newEmploye = await this.employeeService.create(createEmployeeDto);
      return {
        message: 'Employee created successfully',
        data: newEmploye,
      };
    } catch (error) {
      return {
        message: 'Failed to create employee',
        error: error.message, // You can customize the error message
      };
    }
  }

  @Get()
  findAll() {
    return of(this.employeeService.findAll()).pipe(delay(2000));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return of(this.employeeService.findOne(+id)).pipe(delay(2000));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return of(this.employeeService.update(+id, updateEmployeeDto)).pipe(
      delay(2000),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      this.employeeService.remove(+id);
      return {
        message: 'succesfully deleted',
        data: `user id deleted ${id}`,
      };
    } catch (error) {
      return {
        message: 'Id incorrect or not founded, user does not deleted',
        data: id,
      };
    }
  }
}
