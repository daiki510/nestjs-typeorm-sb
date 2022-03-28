import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBlog1648475134277 implements MigrationInterface {
    name = 'CreateBlog1648475134277'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`blogs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL COMMENT '記事タイトル', \`content\` text NULL COMMENT '記事内容', \`status\` enum ('1', '2') NOT NULL COMMENT '公開状況' DEFAULT '2', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`createdAt-idx\` (\`createdAt\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`createdAt-idx\` ON \`blogs\``);
        await queryRunner.query(`DROP TABLE \`blogs\``);
    }

}
