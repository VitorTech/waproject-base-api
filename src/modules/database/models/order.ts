import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';

import { IOrder } from '../interfaces/order';

export class Order extends Model implements IOrder {
  @ApiProperty({ type: 'integer' })
  public id: number;
  @ApiProperty({ type: 'string' })
  public description: string;
  @ApiProperty({ type: 'string' })
  public quantity: number;
  @ApiProperty({ type: 'string' })
  public value: number;

  @ApiProperty({type: 'date'})
  public createdDate: Date;

  @ApiProperty({type: 'date'})
  public updatedDate: Date;

  public static get tableName(): string {
    return 'Order';
  }

  public $beforeInsert(): void {
    this.createdDate = this.updatedDate = new Date();
  }

  public $beforeUpdate(): void {
    this.updatedDate = new Date();
  }

}
