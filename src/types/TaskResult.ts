export interface TaskResult {
    number: number;
    description: string;
    correctPath: string;
    failureResponses: number;
    successResponses: number;
    responses: string[];
    rate: number;
    seconds: number[];
}