import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from 'typeorm';

export class AddAddressToClientTable1614775050520 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'clients',
			new TableColumn({
				name: 'address_id',
				type: 'varchar',
				isNullable: true
			})
		);

		await queryRunner.createForeignKey(
			'clients',
			new TableForeignKey({
				name: 'FKAddress',
				columnNames: ['address_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'addresses',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('clients', 'FKAddress');

		await queryRunner.dropColumn('clients', 'address_id');
	}

}
