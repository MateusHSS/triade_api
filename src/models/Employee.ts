import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceOrder } from './ServiceOrder';

@Entity('employees')
class Employee {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
    	type: 'varchar',
    	nullable: false,
    	name: 'name'
    })
    name: string;

    @OneToMany(() => ServiceOrder, service_orders => service_orders.employee)
    service_orders: ServiceOrder[];

    @CreateDateColumn()
    created_at: Date;

}

export { Employee };
