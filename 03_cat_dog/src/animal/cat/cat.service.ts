import { Injectable } from '@nestjs/common';
import { Animal } from '../animal.model';

@Injectable()
export class CatService {
  getCat(): string {
    const cat = new Animal('cat', 'meow');
    return cat.sound;
  }
}
