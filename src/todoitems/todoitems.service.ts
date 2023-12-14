import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTodoitemDto } from './dto/create-todoitem.dto';
import { UpdateTodoitemDto } from './dto/update-todoitem.dto';
import { TodoItem, TodoItemDocument } from './schemas/todoitems.schema';

@Injectable()
export class TodoitemsService {
  constructor(
    @InjectModel(TodoItem.name)
    private readonly todoItemModel: Model<TodoItemDocument>,
  ) {}

  async create(createTodoitemDto: CreateTodoitemDto): Promise<TodoItem> {
    return this.todoItemModel.create(createTodoitemDto);
  }

  async findAll(): Promise<TodoItem[]> {
    return this.todoItemModel.find().exec();
  }

  async findOne(id: string): Promise<TodoItem> {
    return this.todoItemModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateTodoitemDto: UpdateTodoitemDto,
  ): Promise<TodoItem> {
    return this.todoItemModel
      .findOneAndUpdate({ _id: id }, updateTodoitemDto, {
        returnDocument: 'after',
      })
      .exec();
  }

  async remove(id: string): Promise<TodoItem> {
    const deleted = await this.todoItemModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deleted;
  }

  // REMOVE TODO ITEMS BEGIN
  async onApplicationBootstrap() {
    const prepop = [
      {
        _id: 'feedfacefeedfacefeedface',
        title:
          '<a href="http://adaptable.io/docs/starters/nestjs-mongo-starter#idea-2-deploy-a-code-update">Deploy a code update</a> by removing the banner message',
        done: false,
      },
      {
        _id: 'beeffeedbeeffeedbeeffeed',
        title:
          '<a href="https://adaptable.io/docs/starters/nestjs-mongo-starter#idea-3-start-building-your-app-by-adding-more-api-services">Customize this app</a> by adding an API service to delete To Do items',
        done: false,
      },
    ];

    for (const i of prepop) {
      try {
        await this.create(i);
      } catch (err) {
        if (err.code !== 11000) {
          throw new Error(
            `Error creating prepopulated item ${i._id}: ${err.message}`,
          );
        }
      }
    }
  }
  // REMOVE TODO ITEMS END
}
