import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonService {
  findAll() {
    return `This action returns all pokemon`;
  }

  findOne(id: number) {
    return { test: id };
  }
}
