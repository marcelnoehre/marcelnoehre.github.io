import { PersonalItem } from "./personal-item";

export interface WorkItem {
    position: string;
    institution: string;
    institutionURL: string;
    institute: string;
    instituteURL: string;
    homepage: string;
    homepageURL: string;
    personal: PersonalItem[];
}