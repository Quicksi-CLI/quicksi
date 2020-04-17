import {Controller, Post, Get, BodyParams, Authenticated} from "@tsed/common";
import { Group } from "../data/models/entities/group.entity";
import { GroupsService } from "../services/groups/groups.service";
import {Description, Returns, Summary} from "@tsed/swagger";

@Controller('/group')
export default class GroupController {
    constructor(private groupsService: GroupsService) {}

    @Post("/create")
    @Authenticated({claim: 'can_do_everything'})
    @Summary("Administrator creates group")
    @Description(`
            The current implementation allows the administrator to create a group
    `)
    @Returns(Group)
    async create (@BodyParams() group: Group): Promise<Group> {
        return await this.groupsService.create(group);
    }

    @Get("/all")
    @Authenticated({claim: 'can_do_everything'})
    @Summary("Gel all groups")
    @Description(`
            The current implementation allows the administrator to get all groups
        `)
    @Returns(Group)
    async getAll (): Promise<Group[]> {
        return await this.groupsService.find();
    }

    @Post("/update")
    @Authenticated({claim: 'can_do_everything'})
    @Summary("Administrator updates group")
    @Description(`
            The current implementation allows the administrator to create a group
    `)
    @Returns(Group)
    async update (@BodyParams() group: Group): Promise<Group> {
        const oldGroup = await this.groupsService.findById(group.id);

        oldGroup.name = group.name;
        return await this.groupsService.update(oldGroup);
    }

    @Post("/remove")
    @Authenticated({claim: 'can_do_everything'})
    @Summary("Administrator removes group")
    @Description(`
            The current implementation allows the administrator to remove a group
    `)
    @Returns(Group)
    async remove (@BodyParams() group: Group): Promise<Group> {
        return await this.groupsService.remove(group.id);
    }
}