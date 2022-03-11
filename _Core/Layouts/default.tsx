import Head from 'next/head'
//Components
import Header from './Header/header'
import Footer from './Footer/footer'

//Configs
import {AppConfigs} from '$core'

//Styles
import Styles from './default.module.scss'

interface Props {
    children: JSX.Element
}

const DefaultLayout = ({children}: Props) => {
    return (
        <div className={`${Styles.App}`}>
            <Head>
                <title>{AppConfigs.ApplicationName}</title>
            </Head>
            <Header />
            <main className={`${Styles.content}`}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default DefaultLayout
