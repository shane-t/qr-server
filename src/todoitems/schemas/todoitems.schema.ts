import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoItemDocument = TodoItem & Document;

@Schema()
export class TodoItem {
  @Prop({ required: true })
  title: string;

  @Prop({ default: false })
  done: boolean;
}

export const TodoItemSchema = SchemaFactory.createForClass(TodoItem);
