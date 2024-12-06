import { IsOptional, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  departmentId: string;
}
