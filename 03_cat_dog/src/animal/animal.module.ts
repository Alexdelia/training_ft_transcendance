import { Module } from '@nestjs/common';

import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';

import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [CatModule, DogModule],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
