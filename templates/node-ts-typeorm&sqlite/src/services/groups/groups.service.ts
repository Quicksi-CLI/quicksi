import { Service, AfterRoutesInit } from "@tsed/common";
import { TypeORMService } from "@tsed/typeorm";
import { Connection, Repository } from "typeorm";
import { Group } from "../../data/models/entities/group.entity";

@Service()
export class GroupsService {

    private connection: Connection;
    private groupsRepo: Repository<Group>;

    constructor(private typeORMService: TypeORMService) { }

    $afterRoutesInit() {
        this.connection = this.typeORMService.get();
        this.groupsRepo = this.connection.getRepository(Group);
    }

    async create(group: Group): Promise<Group> {
        await this.groupsRepo.save(group);
        return group;
    }

    async find(): Promise<Group[]> {
        return await this.connection.manager.find(Group);
    }

    async findById(id: number): Promise<Group> {
        return await this.groupsRepo.findOne(id);
    }

    async update(claim: Group): Promise<Group> {
        return await this.connection.manager.save(claim);
    }

    async remove(id: number): Promise <Group> {
        const group = await this.groupsRepo.findOne(id);
        await this.connection.manager.remove(group);

        return group
    }
}