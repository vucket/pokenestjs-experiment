import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHomeMsg(): string {
    return 'Hi, to use this API please search for a specific pokemon in /pokemon/[id or name]';
  }
}
