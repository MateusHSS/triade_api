import { query } from 'express';
import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateClientsTable1614690036381 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'clients',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isNullable: false,
						isPrimary: true
					},
					{
						name: 'cpf',
						type: 'varchar',
						isNullable: false,
						isUnique: true,
					},
					{
						name: 'name',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'contact_id',
						type: 'varchar',
						isNullable: true
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					}
				],
				foreignKeys: [
					{
						name: 'FKContact',
						referencedTableName: 'contacts',
						referencedColumnNames: ['id'],
						columnNames: ['contact_id'],
						onUpdate: 'CASCADE',
						onDelete: 'SET NULL'
					}
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('clients');
	}

}
