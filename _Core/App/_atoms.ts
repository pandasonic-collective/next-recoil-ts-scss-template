import {atom} from 'recoil'

import {ApplicationName} from '../_configs'

export const PageTitle_Atom = atom<string>({
    key: 'PageTitle_Atom',
    default: ApplicationName
}) 
