export interface Repo {
    name: String;
    html_url: String;
    description: String;
    owner: {
        login: String,
        url: String,
        avatar_url: String;
    };
}