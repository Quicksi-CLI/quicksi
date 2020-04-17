import {Controller, Post, Get, BodyParams, Authenticated} from "@tsed/common";
import { Claim } from "../data/models/entities/claim.entity";
import { ClaimsService } from "../services/claims/claims.service";
import {Description, Returns, Summary} from "@tsed/swagger";

@Controller('/claim')
export default class ClaimController {
    constructor(private claimsService: ClaimsService) {}

    @Post("/create")
    @Authenticated({claim: 'can_do_everything'})
    @Summary("Administrator creates claim")
    @Description(`
            The current implementation allows the administrator to create a claim
    `)
    @Returns(Claim)
    async create (@BodyParams() claim: Claim): Promise<Claim> {
        return await this.claimsService.create(claim);
    }

    @Get("/all")
    @Authenticated({claim: 'can_do_everything'})
    @Summary("Gel all claims")
    @Description(`
            The current implementation allows the administrator to get all claims
        `)
    @Returns(Claim)
    async getAll (): Promise<Claim[]> {
        return await this.claimsService.find();
    }

    @Post("/update")
    @Authenticated({claim: 'can_do_everything'})
    @Summary("Administrator updates claim")
    @Description(`
            The current implementation allows the administrator to create a claim
    `)
    @Returns(Claim)
    async update (@BodyParams() claim: Claim): Promise<Claim> {
        const oldClaim = await this.claimsService.findById(claim.id);

        oldClaim.claim = claim.claim;
        return await this.claimsService.update(oldClaim);
    }

    @Post("/remove")
    @Authenticated({claim: 'can_do_everything'})
    @Summary("Administrator removes claim")
    @Description(`
            The current implementation allows the administrator to remove a claim
    `)
    @Returns(Claim)
    async remove (@BodyParams() claim: Claim): Promise<Claim> {
        return await this.claimsService.remove(claim.id);
    }
}