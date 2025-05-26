import type { TaskShare } from "./TaskShare";

export interface StudyInfoShare {
    welcomeMessage: string;
    finalMessage: string;
    isEnabled: boolean;
    paths: string[];
    tasks: TaskShare[];
}