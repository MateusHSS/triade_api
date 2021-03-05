import { EntityRepository, Repository } from 'typeorm';
import { ServiceOrder } from '../models/ServiceOrder';


@EntityRepository(ServiceOrder)
class ServiceOrderRepository extends Repository<ServiceOrder>{
    
    getDeadline(order: ServiceOrder){
        return new Date(order.deadline).toLocaleDateString('pt-BR', { timeZone: 'UTC'});
    }

}

export { ServiceOrderRepository };
