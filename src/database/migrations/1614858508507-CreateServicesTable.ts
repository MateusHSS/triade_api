import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateServicesTable1614858508507 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'services',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isNullable: false,
						isPrimary: true,
					},
					{
						name: 'description',
						type: 'varchar',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'slug',
						type: 'varchar',
						isNullable: false,
						isUnique: true,
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
		await queryRunner.dropTable('services');
	}

}
