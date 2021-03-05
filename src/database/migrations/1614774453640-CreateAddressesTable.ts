import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateAddressesTable1614774453640 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'addresses',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isNullable: false,
						isPrimary: true,
					},
					{
						name: 'zipcode',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'street',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'number',
						type: 'integer',
						isNullable: true,
					},
					{
						name: 'complement',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'district',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'city',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'state',
						type: 'varchar',
						isNullable: false,
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
		await queryRunner.dropTable('addresses');
	}

}
