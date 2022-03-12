import {atom, atomFamily} from 'recoil'
// import {User as UserAuth} from 'firebase/auth'
import {IUser, DefaultUser} from '$interface/IUser'

export const User_Data_Atom = atom<IUser>({
    key: 'User_Data_Atom',
    default: DefaultUser
})


export const User_Data_AtomFamily = atomFamily<IUser, string>({
    key: 'User_Data_AtomFamily',
    default: DefaultUser
})



export const Auth_User_Atom = atom<any>({
    key: 'Auth_User_Atom',
    default: null
})
