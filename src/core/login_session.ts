export interface LoginData {
    user : responseToken;
    loading: boolean;
    error: string;
}

export interface responseToken {
    token:string;
}

export interface Credential{
    username:string,
    password:string
}