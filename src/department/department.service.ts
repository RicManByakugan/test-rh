import { CreateDepartmentDto } from './dto/create.department.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDepartmentDto } from './dto/update.department.dto';

@Injectable()
export class DepartmentService {
  constructor(private prismaService: PrismaService) {}

  async getAll() {
    return this.prismaService.department.findMany();
  }

  async getOne(id: string) {
    return this.prismaService.department.findUnique({
      where: { id },
    });
  }

  async create(data: CreateDepartmentDto) {
    return this.prismaService.department.create({ data });
  }

  async update(id: string, data: UpdateDepartmentDto) {
    return this.prismaService.department.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prismaService.department.delete({
      where: { id },
    });
  }
}
