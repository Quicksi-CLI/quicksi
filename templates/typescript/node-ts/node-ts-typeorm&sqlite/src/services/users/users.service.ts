import { Service, AfterRoutesInit } from "@tsed/common";
import { TypeORMService } from "@tsed/typeorm";
import { Connection, Repository } from "typeorm";
import { User } from "../../data/models/entities/user.entity";
import { Claim } from "../../data/models/entities/claim.entity";

@Service()
export class UsersService {

    private connection: Connection;
    private usersRepo: Repository<User>;
    private claimsRepo: Repository<Claim>;

    constructor(private typeORMService: TypeORMService) { }

    $afterRoutesInit() {
        this.connection = this.typeORMService.get();
        this.usersRepo = this.connection.getRepository(User);
        this.claimsRepo = this.connection.getRepository(Claim);
    }

    async create(user: User): Promise<User> {
        await this.usersRepo.save(user);
        return user;
    }

    async find(): Promise<User[]> {
        const users = await this.connection.manager.find(User);
        return users;
    }

    async findById(id: number): Promise<User> {
        return await this.usersRepo.findOne(id);
    }

    async findByEmail(email: string): Promise<User> {
        return await this.usersRepo.findOne({ email });
    }

    async findByCredential(email: string, password: string): Promise<User> {
        return await this.usersRepo.findOne({ email, password });
    }

    async storeClaim(claim: string, user: User): Promise<Claim> {
        return await this.claimsRepo.save({claim, user});
    }

    async update(user: User): Promise<User> {
        return await this.connection.manager.save(user);
    }

    async updateOneColumn(email: string, columnName: string, value: any): Promise<User> {
        const user = await this.usersRepo.findOne({email});
        user[columnName] = value;
        return await this.connection.manager.save(user);
    }

    async remove(email: string): Promise <User> {
        const user = await this.usersRepo.findOne({email});
        await this.connection.manager.remove(user);

        return user
    }
}