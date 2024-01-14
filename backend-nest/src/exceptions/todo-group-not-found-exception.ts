import { NotFoundException } from '@nestjs/common';

export class TodoGroupNotFoundException extends NotFoundException {
  constructor() {
    super('Todo group not found');
  }
}
