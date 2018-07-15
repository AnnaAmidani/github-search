import { Repo } from '../model/Repo';

export interface Code {
    name: String;
    path: String;
    url: String;
    repository: Repo;
}