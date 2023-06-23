import { Review } from "./Review";

export interface Reviews{
    good: number;
    mid: number;
    bad: number;
    reviewedUser: {
        id: number;
        firstname: string;
        creatorUsername: string;
    };
    reviews: Review[];
}