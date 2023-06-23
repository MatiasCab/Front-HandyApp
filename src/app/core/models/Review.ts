export interface Review{
    id: number;
    description: string;
    score: number;
    problemId: number;
    problemName: string;
    creator: {
        id: number;
        firstname: string;
        creatorUsername: string;
    };
    reviewedUser: {
        id: number;
        firstname: string;
        creatorUsername: string;
    };
}