import slug from 'slug';
import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceOrder } from './ServiceOrder';

@Entity('services')
class Service{

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({
    	type: 'varchar',
    	nullable: false,
    	unique: true,
    	name: 'description'
    })
    description: string;

    @Column({
    	type: 'varchar',
    	unique: true,
    	nullable: false,
    	name: 'slug'
    })
    slug: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => ServiceOrder)
    @JoinTable({ 
        name: 'service_order_services', 
        joinColumn: { 
            name: 'service_id',
            referencedColumnName: 'id',
        }
    })
    service_orders: ServiceOrder[];

    @BeforeInsert()
    createSlug(){
    	this.slug = slug(this.description, {
    		replacement: '_',
    		lower: true
    	});
    }
}

export { Service };