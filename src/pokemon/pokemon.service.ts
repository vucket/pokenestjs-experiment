import { Injectable, Logger } from '@nestjs/common';
import { IPokemon } from './interfaces/pokemon.interface';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PokemonService {
  private readonly logger = new Logger(PokemonService.name);
  constructor(private readonly httpService: HttpService) {}

  async findOne(id: string): Promise<IPokemon> {
    const fullUrl = `http://pokeapi.co/api/v2/pokemon/${id}`;
    const data = await firstValueFrom(
      this.httpService
        .get<IPokemon>(fullUrl, {
          headers: {
            'Accept-Encoding': '*',
          },
        })
        .pipe(
          map((response) => {
            return response.data;
          }),
          catchError((error: AxiosError) => {
            this.logger.error(error.message);
            throw Error('Something happened!');
          }),
        ),
    );
    return data;
  }
}
