import { Required, PropertyType} from "@tsed/common";

export class AssignClaims {

    @Required()
    userId: number;

    @Required()
    @PropertyType(String)
    claims: string[];

}