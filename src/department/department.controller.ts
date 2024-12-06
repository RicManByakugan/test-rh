import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create.department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Get('all')
  getAll() {
    return this.departmentService.getAll();
  }

  @Get('one')
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.departmentService.getOne(id);
  }

  @Post('create')
  create(@Body() data: CreateDepartmentDto) {
    return this.departmentService.create(data);
  }

  @Post('update/:id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() data: CreateDepartmentDto,
  ) {
    return this.departmentService.update(id, data);
  }

  @Post('delete/:id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.departmentService.delete(id);
  }
}
