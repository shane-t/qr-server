import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import * as sanitizeHtml from 'sanitize-html';

import { TodoitemsService } from './todoitems.service';
import { CreateTodoitemDto } from './dto/create-todoitem.dto';
import { UpdateTodoitemDto } from './dto/update-todoitem.dto';

function sanitizeTodo<T extends { title?: string }>(input: T): T {
  if (!input.title) return input;
  return {
    ...input,
    title: sanitizeHtml(input.title, {
      allowedTags: ['a'],
      allowedAttributes: {
        a: ['href'],
      },
    }),
  };
}

@Controller('todos')
export class TodoitemsController {
  constructor(private readonly todoitemsService: TodoitemsService) {}

  @Post()
  create(@Body() createTodoitemDto: CreateTodoitemDto) {
    return this.todoitemsService.create(sanitizeTodo(createTodoitemDto));
  }

  @Get()
  findAll() {
    return this.todoitemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoitemsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoitemDto: UpdateTodoitemDto,
  ) {
    return this.todoitemsService.update(id, sanitizeTodo(updateTodoitemDto));
  }

  // INSERT DELETE CODE HERE

}
