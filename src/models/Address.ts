import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('addresses')
class Address {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
    	type: 'varchar',
    	nullable: true,
    	name: 'zipcode'
    })
    zipcode: string;

    @Column({
    	type: 'varchar',
    	nullable: false,
    	name: 'street'
    })
    street: string;

    @Column({
    	type: 'integer',
    	nullable: true,
    	name: 'number'
    })
    number: number;

    @Column({
    	type: 'varchar',
    	nullable: true,
    	name: 'complement'
    })
    complement: string;

    @Column({
    	type: 'varchar',
    	nullable: false,
    	name: 'district'
    })
    district: string;

    @Column({
    	type: 'varchar',
    	nullable: false,
    	name: 'city'
    })
    city: string;

    @Column({
    	type: 'varchar',
    	nullable: false,
    	name: 'state'
    })
    state: string;

    @CreateDateColumn()
    created_at: Date;

}

export { Address };