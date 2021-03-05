import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('contacts')
class Contact{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
    	type: 'varchar',
    	nullable: true,
    	name: 'telephone_1'
    })
    telephone_1: string;

    @Column({
    	type: 'varchar',
    	nullable: true,
    	name: 'telephone_2'
    })
    telephone_2: string;

    @Column({
    	type: 'varchar',
    	nullable: true,
    	name: 'cellphone_1'
    })
    cellphone_1: string;

    @Column({
    	type: 'varchar',
    	nullable: true,
    	name: 'cellphone_2'
    })
    cellphone_2: string;

    @Column({
    	type: 'varchar',
    	nullable: true,
    	unique: true,
    	name: 'email'
    })
    email: string;

    @CreateDateColumn()
    created_at: Date;

}

export { Contact };
