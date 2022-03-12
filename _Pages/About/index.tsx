//Modules
import Head from 'next/head'

import Styles from './about-page.module.scss'
const AboutPage = () => {

    return (
        <>
        <Head>
            <title>About Page</title>
        </Head>
        <div className={Styles.AboutPage}>About Page</div>
        </>
    )
}

export default AboutPage
