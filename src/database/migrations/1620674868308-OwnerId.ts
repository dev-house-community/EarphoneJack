import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class OwnerId1620674868308 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('playlist', new TableColumn({
      name: 'owner_id',
      type: 'uuid',
      isNullable: true,
    }),
    );

    await queryRunner.addColumn('playlist', new TableColumn({
      name: 'public',
      type: 'boolean',
    }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('playlist', 'owner_id');
    await queryRunner.dropColumn('playlist', 'public');
  }

}
