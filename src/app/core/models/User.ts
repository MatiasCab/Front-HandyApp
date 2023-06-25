import { Skill } from "./Skill";

export interface User{
    id?: number;
    CI: number;
    firstname?: string;
    lastname?: string;
    username?: string;
    singupDate?: Date;
    email?: string;
    description?: string;
    profileImage?: string;
    friendshipStatus?: number;
    skills?: Skill[];
    friendsAmount?: number;
}

