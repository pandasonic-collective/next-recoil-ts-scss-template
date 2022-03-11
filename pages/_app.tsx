import {AppProps} from 'next/app'
import {RecoilRoot} from 'recoil'
//Layouts
import {DefaultLayout, App} from '$core'

import '$global_style/globals.scss'

export default function AppRoot(props: AppProps) {
    const {AppComponent} = App
    return (
        <RecoilRoot>
            <DefaultLayout>
                <AppComponent {...props}/>
            </DefaultLayout>
        </RecoilRoot>
    )
}
