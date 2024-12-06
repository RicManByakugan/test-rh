import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './dto/employee.dto';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {}

    @Get('/all')
    getAllEmployees() {
        return this.employeeService.getAllEmployees();
    }

    @Get('/one/:id')
    getOneEmployee(
        @Param('id') id: string,
    ) {
        return this.employeeService.getOneEmployee(id);
    }

    @Post('/create')
    createEmployee(
        @Body() data: EmployeeDto,
    ) {
        return this.employeeService.createEmployee(data);
    }

    @Put('/update/:id')
    updateEmployee(
        @Param('id') id: string,
        @Body() data: EmployeeDto,
    ) {
        return this.employeeService.updateEmployee(id, data);
    }

    @Delete('/delete/:id')
    deleteEmployee(
        @Param('id') id: string,
    ) {
        return this.employeeService.deleteEmployee(id);
    }
}
