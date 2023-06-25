import { Skill } from "./Skill";
import { User } from "./User";

export interface Problem{
    id?: number;
    imageURL?: string;
    name?: string;
    distance: number;
    description?: string;
    postedDate?: Date;
    resolvedDate?: Date;
    lat?: number;
    lng?: number;
    status?: string;
    skills?: Skill[];
    ownerUser?: User
}