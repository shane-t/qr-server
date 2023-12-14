import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoitemsService } from './todoitems.service';
import { TodoitemsController } from './todoitems.controller';
import { TodoItem, TodoItemSchema } from './schemas/todoitems.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TodoItem.name, schema: TodoItemSchema },
    ]),
  ],
  controllers: [TodoitemsController],
  providers: [TodoitemsService],
})
export class TodoitemsModule {}
