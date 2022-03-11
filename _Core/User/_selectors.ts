import {selector, DefaultValue} from 'recoil'

//Firebase
import {FireAuth} from '$firebase'

import {User_Atom} from './_atoms'
import {ICredentials} from './_interfaces'

export const LoginUser_Selector = selector<ICredentials | null>({
    key: 'LoginUser_Selector',
    get: () => null,
    set: ({set}, creds) => {
        if(!creds || creds instanceof DefaultValue) return
        const {email, password} = creds
        FireAuth.EmailPass.signInExistingUser(email, password)

    }
})
