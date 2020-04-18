import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../models/entities/user.entity";
import { Claim } from "../models/entities/claim.entity";

const users = [
    {
        "firstName": "admin",
        "lastName": "admin",
        "email": "admin@localhost.com",
        "password": "$2b$10$7Tx7dQh85FxMr5MRxgnvAuloSzqgq08JS3QKtxmIE.ssNA8ZsHFzG",
        "claims": [
            {
                "claim": "can_do_everything"
            },
            {
                "claim": "can_create_users"
            }
        ],
        "invitationToken": "",
        "resetToken": ""
    }
];


export class InitializeDatabase1546837545440 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<any> {
        //const table = await queryRunner.getTable('user');
        const userRepo = queryRunner.connection.getRepository(User);
        const claimRepo = queryRunner.connection.getRepository(Claim);
        return await users.forEach( async user => {           
            const usr = await userRepo.save(user);
            
            await user.claims.forEach(async obj => {
                Object.assign(obj, {user: usr});
                await claimRepo.save(obj);
            })
        });
    }

    async down(queryRunner: QueryRunner): Promise<any> {

    }

}