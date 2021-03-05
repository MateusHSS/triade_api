import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './Client';
import { Employee } from './Employee';
import { Service } from './Service';


@Entity('service_orders')
class ServiceOrder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
    	type: 'date',
    	nullable: false,
    	name: 'date'
    })
    date: Date;

    @Column({
    	type: 'varchar',
    	unique: true,
    	name: 'internal_process',
    	nullable: false,
    })
    internal_process: string;

    @Column({
    	type: 'date',
    	name: 'deadline',
    	nullable: true,
    })
    deadline: Date;

    @Column({
        type: 'text',
        name: 'description',
        nullable: true,
    })
    description: string;

    @Column({
    	type: 'varchar',
    	name: 'employee_id'
    })
    employee_id: string;

    @ManyToOne(() => Employee, employee => employee.service_orders)
    @JoinColumn({ name: 'employee_id', referencedColumnName: 'id' })
    employee: Employee;

    @Column({
    	type: 'varchar',
    	name: 'client_id'
    })
    client_id: string;

    @ManyToOne(() => Client, client => client.service_orders)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'id' })
    client: Client;

    @ManyToMany(() => Service)
    @JoinTable({ 
        name: "service_order_services",
        joinColumn: {
            name: 'service_order_id',
            referencedColumnName: 'id'
        }
    })
    services: Service[];

    @CreateDateColumn()
    created_at: Date;

    @BeforeInsert()
    generateInternalProcess(){
    	this.internal_process = 'P'+String(this.id).padStart(4, '0');
    }
    
}

export { ServiceOrder };
