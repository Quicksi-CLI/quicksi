import { Service, AfterRoutesInit } from "@tsed/common";
import { TypeORMService } from "@tsed/typeorm";
import { Connection, Repository } from "typeorm";
import { Claim } from "../../data/models/entities/claim.entity";

@Service()
export class ClaimsService {

    private connection: Connection;
    private claimsRepo: Repository<Claim>;

    constructor(private typeORMService: TypeORMService) { }

    $afterRoutesInit() {
        this.connection = this.typeORMService.get();
        this.claimsRepo = this.connection.getRepository(Claim);
    }

    async create(claim: Claim): Promise<Claim> {
        await this.claimsRepo.save(claim);
        return claim;
    }

    async find(): Promise<Claim[]> {
        const claims = await this.connection.manager.find(Claim);
        return claims;
    }

    async findById(id: number): Promise<Claim> {
        return await this.claimsRepo.findOne(id);
    }

    async update(claim: Claim): Promise<Claim> {
        return await this.connection.manager.save(claim);
    }

    async remove(id: number): Promise <Claim> {
        const claim = await this.claimsRepo.findOne(id);
        await this.connection.manager.remove(claim);

        return claim
    }
}