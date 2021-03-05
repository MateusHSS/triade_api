import {MigrationInterface, QueryRunner, Table, TableForeignKey} from 'typeorm';

export class CreateServiceOrdersTable1614862013738 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'service_orders',
				columns: [
					{
						name: 'id',
						type: 'integer',
						isPrimary: true,
						isNullable: false,
					},
					{
						name: 'internal_process',
						type: 'varchar',
						isNullable: false,
						isUnique: true, 
					},
                    {
						name: 'deadline',
						type: 'date',
						isNullable: true,
					},
                    {
                        name: 'description',
                        type: 'text',
                        isNullable: true
                    },
					{
						name: 'employee_id',
						type: 'varchar',
						isNullable: false,
					},
                    {
						name: 'client_id',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						isNullable: false,
						default: 'now()'
					}
				],
				foreignKeys: [
					{
						name: 'FKEmployee',
                        referencedTableName: 'employees',
                        referencedColumnNames: ['id'],
						columnNames: ['employee_id'],
						onDelete: 'RESTRICT',
						onUpdate: 'CASCADE'
					},
					{
						name: 'FKClient',
						referencedTableName: 'clients',
						referencedColumnNames: ['id'],
						columnNames: ['client_id'],
						onDelete: 'RESTRICT',
						onUpdate: 'CASCADE'
					},
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("service_orders");
	}

}
