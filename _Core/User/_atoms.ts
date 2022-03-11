import {atom} from 'recoil'
// import {User as UserAuth} from 'firebase/auth'
import {IUser, DefaultUser} from '$interface/IUser'

export const User_Data_Atom = atom<IUser>({
    key: 'User_Data_Atom',
    default: DefaultUser
})

export const Auth_User_Atom = atom<any>({
    key: 'Auth_User_Atom',
    default: null
})
