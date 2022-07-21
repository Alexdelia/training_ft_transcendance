import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatModule } from './animal/cat/cat.module';
import { DogModule } from './animal/dog/dog.module';

@Module({
  imports: [CatModule, DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
