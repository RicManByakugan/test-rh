import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private prismaService: PrismaService) {}

  async getAllEmployees(): Promise<EmployeeDto[]> {
    return await this.prismaService.employee.findMany();
  }

  async getOneEmployee(id: string): Promise<EmployeeDto> {
    return await this.prismaService.employee.findUnique({
      where: { id },
    });
  }

  async createEmployee(data: EmployeeDto): Promise<EmployeeDto> {
    return await this.prismaService.employee.create({ data });
  }

  async updateEmployee(id: string, data: EmployeeDto): Promise<EmployeeDto> {
    return await this.prismaService.employee.update({
      where: { id },
      data,
    });
  }

  async deleteEmployee(id: string) {
    return await this.prismaService.employee.delete({
      where: { id },
    });
  }

  
}
