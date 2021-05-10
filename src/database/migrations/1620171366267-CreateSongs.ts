import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSongs1620171366267 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'songs',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'playlist_id',
          type: 'integer',
        },
        {
          name: 'video_id',
          type: 'varchar',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'author',
          type: 'varchar',
        }
      ],
    }));

    await queryRunner.createForeignKey('songs', new TableForeignKey({
      name: 'PlaylistIdentification',
      columnNames: ['playlist_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'playlist',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('songs', 'PlaylistIdentification');

    await queryRunner.dropTable('songs');
  }

}
