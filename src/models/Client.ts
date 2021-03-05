import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './Address';
import { Contact } from './Contact';
import { ServiceOrder } from './ServiceOrder';

@Entity('clients')
class Client {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
    	type: 'varchar',
    	unique: true,
    	nullable: false,
    	name: 'cpf'
    })
    cpf: string;

    @Column({
    	type: 'varchar',
    	nullable: false,
    	name: 'name'
    })
    name: string;

    @Column()
    contact_id: string;

    @OneToOne(() => Contact)
    @JoinColumn({name: 'contact_id'})
    contact: Contact;

    @Column()
    address_id: string;

    @OneToOne(() => Address)
    @JoinColumn({name: 'address_id'})
    address: Address;

    @OneToMany(() => ServiceOrder, service_orders => service_orders.client)
    service_orders: ServiceOrder[];

    @CreateDateColumn()
    created_at: Date;
}

export { Client };

