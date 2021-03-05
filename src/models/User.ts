import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
    	type: 'varchar', 
    	nullable: false,
    	name: 'name',
    })
    name: string;

    @Column({
    	type: 'varchar',
    	unique: true,
    	name: 'email',
    })
    email: string;

    @Column({
    	type: 'varchar',
    	nullable: false,
    	select: false,
    	name: 'password'
    })
    password: string

    @CreateDateColumn()
    created_at: Date;
    
}

export { User };