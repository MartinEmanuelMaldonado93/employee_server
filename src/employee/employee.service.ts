import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { fakeEmployees } from './employeeFake';
import { Employee } from './entities/employee.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmployeeService {
  private employees: Employee[];

  constructor(private configService: ConfigService) {
    this.employees = fakeEmployees;
  }

  async create(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<CreateEmployeeDto> {
    // Assuming you have a database, you can add the employee to the database here
    const newEmployee: Employee = {
      id: this.employees.length + 1, // Generate a unique ID
      ...createEmployeeDto,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  findAll(): Employee[] {
    const user = this.configService.get('database', { infer: true });
    console.log(user);
    
    return this.employees;
  }

  findOne(id: number): Employee {
    const result: Employee = this.employees.find((emp) => emp.id === id);
    console.log(result);
    return result;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const index = this.employees.findIndex((emp) => emp.id === id);
    if (index === -1) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    this.employees[index] = {
      ...this.employees[index],
      ...updateEmployeeDto,
    };
    return this.employees[index];
  }

  async remove(id: number) {
    const index = this.employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1);
    } else {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
  }
}
