import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoitemDto } from './create-todoitem.dto';

export class UpdateTodoitemDto extends PartialType(CreateTodoitemDto) {}
