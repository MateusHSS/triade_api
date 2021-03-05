import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateEmployeesTable1614780377147 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'employees',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						isNullable: false,
					},
					{
						name: 'name',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						isNullable: false,
						default: 'now()'
					}
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('employees');
	}

}
