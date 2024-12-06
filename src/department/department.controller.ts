import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentDto } from './dto/department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Get('all')
  getAll() {
    return this.departmentService.getAll();
  }

  @Get('one/:id')
  getOne(@Param('id') id: string) {
    return this.departmentService.getOne(id);
  }

  @Post('create')
  create(@Body() data: DepartmentDto) {
    return this.departmentService.create(data);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() data: DepartmentDto) {
    return this.departmentService.update(id, data);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.departmentService.delete(id);
  }
}
