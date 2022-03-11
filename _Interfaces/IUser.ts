export interface IUser {
    email: string | null
    first_name: string | null
    last_name: string | null
    zip: string | null
}

export const DefaultUser: IUser = {
    email: null,
    first_name: null,
    last_name: null,
    zip: null
}

export interface ICredentials {
    email: string
    password: string
}
