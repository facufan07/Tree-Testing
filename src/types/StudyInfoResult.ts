import type { TaskResult } from "./TaskResult";

export interface StudyInfoResult {
    welcomeMessage: string;
    finalMessage: string;
    isEnabled: boolean;
    participants: number;
    paths: string[];
    tasks: TaskResult[];
    secret: string;
}