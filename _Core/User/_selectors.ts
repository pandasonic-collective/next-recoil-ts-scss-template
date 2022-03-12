import {selectorFamily, DefaultValue} from 'recoil'

// //Firebase
// import {FireAuth} from '$firebase'
//
// import {User_Atom} from './_atoms'
// import {ICredentials} from './_interfaces'
//
// export const LoginUser_Selector = selector<ICredentials | null>({
//     key: 'LoginUser_Selector',
//     get: () => null,
//     set: ({set}, creds) => {
//         if(!creds || creds instanceof DefaultValue) return
//         const {email, password} = creds
//         FireAuth.EmailPass.signInExistingUser(email, password)
//
//     }
// })


//User Atoms
import {User} from '$core'

interface FullName {
    fName: string
    lName:string
}

export const UserFullName_Selector = selectorFamily<FullName | string, string>({
    key: 'User_Selector',
    get: (id: string) => ({get}) => {
        const {UserAtoms} = User
        const {User_Data_AtomFamily} = UserAtoms
        const user = get(User_Data_AtomFamily(id))

        return `${user.first_name} ${user.last_name}`
    },
    set: (id: string) => ({get, set}, newValues) => {
        const {UserAtoms} = User
        const {User_Data_AtomFamily} = UserAtoms
        const user = {...get(User_Data_AtomFamily(id))}
        const {fName, lName} = newValues as FullName
        user.first_name = fName
        user.last_name = lName
        set(User_Data_AtomFamily(id), user)
    }
})
