//Modules
import {useState, useEffect} from 'react'
import type {AppProps} from 'next/app'
import {RecoilRoot} from 'recoil'

//App Component
import App from '$app'

//Loading Components
import PageLoading from '$loaders/pageLoading'

//Global Styles
import '$global_style/globals.scss'

//Add needed values to access on window
declare global {
    interface Window{
        //Add types access on window
        //Example: to assign assign window.test
        //test: boolean
    }
}

const AppCore = (props: AppProps) => {
    //Any PreProcessing or Pre-App-Rendering logic can go here.
    const [READY_TO_RENDER, set_READY_TO_RENDER] = useState(false)

    useEffect(() => {
        ///Fetch any values that are needed before App can render (Example: API Tokens)

        ///example timeout for fetching time
        setTimeout(() => set_READY_TO_RENDER(true), 1000)
    }, [])

    if(!READY_TO_RENDER){
        console.log('PreRendering...')
        return <PageLoading />
    }
    return (
        <RecoilRoot>
            <App {...props}/>
        </RecoilRoot>
    )
}


export default AppCore
