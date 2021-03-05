import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './Client';
import { Employee } from './Employee';


@Entity('service_orders_services')
class ServiceOrderServices {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
    	type: 'varchar',
    	nullable: false,
    	name: 'service_id'
    })
    service_id: string;

    @Column({
    	type: 'integer',
    	name: 'service_order_id',
    	nullable: false,
    })
    service_order_id: number;

    @Column({
    	type: 'varchar',
    	name: 'client_id'
    })
    client_id: string;

    @CreateDateColumn()
    created_at: Date;

}

export { ServiceOrderServices };
