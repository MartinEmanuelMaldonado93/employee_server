import { Controller, Get, Param } from '@nestjs/common';
import { EnvsService } from './envs.service';

@Controller('envs')
export class EnvsController {
  constructor(private readonly envsService: EnvsService) {}

  @Get()
  findAll() {
    return this.envsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.envsService.findOne(+id);
  }
}
