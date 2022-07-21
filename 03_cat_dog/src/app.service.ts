import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInstruction(): string {
    return "go to: 'localhost:3000/cat' or 'localhost:3000/dog'";
  }
}
