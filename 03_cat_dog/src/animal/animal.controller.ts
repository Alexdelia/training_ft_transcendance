import { Controller, Get, Param } from '@nestjs/common';
import { AnimalService } from './animal.service';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  getInstruction(): string {
    return this.animalService.getInstruction();
  }

  @Get(':type')
  getSound(@Param('type') animalType: string): string {
    return this.animalService.getSound(animalType);
  }
}
