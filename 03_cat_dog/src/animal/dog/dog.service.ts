import { Injectable } from '@nestjs/common';
import { Animal } from '../animal.model';

@Injectable()
export class DogService {
  getDog(): string {
    const dog = new Animal('dog', 'woof');
    return dog.sound;
  }
}
