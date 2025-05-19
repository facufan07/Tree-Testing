import type { TaskBD } from "./TaskBD";

export interface StudyInfo {
    welcomeMessage: string;
    finalMessage: string;
    isEnabled: boolean;
    participants: number;
    paths: string[];
    tasks: TaskBD[];
}