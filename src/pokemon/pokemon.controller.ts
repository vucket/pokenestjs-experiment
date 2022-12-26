import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { IPokemon } from './interfaces/pokemon.interface';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IPokemon> {
    return await this.pokemonService.findOne(id);
  }
}
