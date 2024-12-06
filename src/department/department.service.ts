import { DepartmentDto } from './dto/department.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<DepartmentDto[]> {
    return this.prismaService.department.findMany();
  }

  async getOne(id: string): Promise<DepartmentDto> {
    return this.prismaService.department.findUnique({
      where: { id },
    });
  }

  async create(data: DepartmentDto): Promise<DepartmentDto> {
    return this.prismaService.department.create({ data });
  }

  async update(id: string, data: DepartmentDto): Promise<DepartmentDto> {
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

  async getTopDepartmentsWithMostEmployees() {
    return this.prismaService.department.findMany({
      take: 3,
      orderBy: {
        employees: {
          _count: 'desc',
        },
      },
      include: {
        employees: true,
      },
    });
  }
}
