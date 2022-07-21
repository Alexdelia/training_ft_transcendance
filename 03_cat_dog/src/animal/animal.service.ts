import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimalService {
  getInstruction(): string {
    return "try: 'localhost:3000/animal/YOUR_ANIMAL";
  }

  getSound(animalType: string): string {
    return animalType + ': weird sound';
  }
}
