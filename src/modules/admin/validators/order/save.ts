import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min
} from 'class-validator';
import { IOrder } from 'modules/database/interfaces/order';

export class SaveValidator implements IOrder {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ required: false, type: 'integer' })
  public id?: number;

  @IsNotEmpty()
  @IsString()
 
  @ApiProperty({ required: true, type: 'string'})
  public description: string;

  @IsNotEmpty()

  @ApiProperty({ required: false, type: 'number' })
  public quantity: number;

  @IsNotEmpty()
  @ApiProperty({ required: true, type: 'number'})
  public value: number;

}
