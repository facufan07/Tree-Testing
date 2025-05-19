export interface TaskBD {
    id: number;
    number: number;
    description: string;
    correctPath: string;
    failureResponses: number;
    successResponses: number;
    responses: string[];
    seconds: number[];
}