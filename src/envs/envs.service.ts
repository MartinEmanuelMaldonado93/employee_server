import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvsService {
  constructor(private configService: ConfigService<EnvConfig>) {}

  findAll(): { port: number; databaseUrl: string } {
    // const database = this.configService.get<string>('database.');
    const database = this.configService.get<EnvConfig['database']>('database');
    const portConfig =
      this.configService.get<EnvConfig['serverConfig']>('serverConfig');

    console.log(`######## ${database}, ${portConfig}`);
    return {
      databaseUrl: database.databaseUrl,
      port: portConfig.port,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} env`;
  }
}
