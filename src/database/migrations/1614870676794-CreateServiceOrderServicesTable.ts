import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateServiceOrderServicesTable1614870676794 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "service_order_services",
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'service_order_id',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'service_id',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKServiceOrder',
                        referencedTableName: 'service_orders',
                        referencedColumnNames: ['id'],
						columnNames: ['service_order_id'],
						onDelete: 'RESTRICT',
						onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKService',
                        referencedTableName: 'services',
                        referencedColumnNames: ['id'],
						columnNames: ['service_id'],
						onDelete: 'RESTRICT',
						onUpdate: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
