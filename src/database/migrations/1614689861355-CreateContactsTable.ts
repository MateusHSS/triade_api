import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateContactsTable1614689861355 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'contacts',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isNullable: false,
						isPrimary: true,
					},
					{
						name: 'telephone_1',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'telephone_2',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'cellphone_1',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'cellphone_2',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'email',
						type: 'varchar',
						isNullable: true,
						isUnique: true,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						isNullable: false,
						default: 'now()'
					},
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('contacts');
	}

}
