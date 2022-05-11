import axios from 'axios'

export interface IUser {
    email: string | null
    first_name: string | null
    last_name: string | null
    zip: string | null
    settingFullNameOnDB?: (f:string, l:string) => void
}

export const DefaultUser: IUser = {
    email: null,
    first_name: 'Adam',
    last_name: 'Stark',
    zip: '3245345',
    settingFullNameOnDB: (f:string, l:string) => {
        if(f === '' || l === '') return
        const data = f + ' ' + l
        //axios.post('/post/fullusername', data)
    }
}

export interface ICredentials {
    email: string
    password: string
}
