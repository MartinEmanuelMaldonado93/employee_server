import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvsController } from './envs.controller';
import { EnvsService } from './envs.service';

@Module({
  controllers: [EnvsController],
  providers: [EnvsService],
  imports: [ConfigModule],
})
export class EnvsModule {}
