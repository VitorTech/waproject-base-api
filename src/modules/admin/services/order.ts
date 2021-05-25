import { BadRequestException,  Injectable, NotFoundException } from '@nestjs/common';
import { ICurrentUser } from 'modules/common/interfaces/currentUser';

import { Order } from 'modules/database/models/order';
import {IOrder} from 'modules/database/interfaces/order';

import { OrderRepository } from '../repositories/order';

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: OrderRepository
  ) {}

  public async save(model: IOrder): Promise<Order> {

    if (model.id) return this.update(model);
    return this.create(model);
  }

  public async remove(userId: number, currentUser: ICurrentUser): Promise<void> {
    const user = await this.orderRepository.findById(userId);

    if (!user) {
      throw new NotFoundException('not-found');
    }

    if (user.id === currentUser.id) {
      throw new BadRequestException('not-allowed-remove-current-user');
    }

    return this.orderRepository.remove(userId);
  }

  private async create(model: IOrder): Promise<Order> {
    
    const order = await this.orderRepository.insert(model);
  
    return order;
  }

  private async update(model: IOrder): Promise<Order> {
    
    const order = await this.orderRepository.findById(model.id);

    return this.orderRepository.update({ ...order, ...model });
  }
}
