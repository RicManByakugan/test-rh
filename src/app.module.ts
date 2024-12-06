import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [EmployeeModule, DepartmentModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
