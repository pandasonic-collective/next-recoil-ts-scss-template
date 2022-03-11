//Modules
import Link from 'next/link'

//Components
import NavBar from '../NavBar/navbar'
import AdminPanelHeader from './admin-header'
import UserAccount from '../User/user-account'
import Socials from '../Socials/socials'

import {AppConfigs} from '$core'

//Styles
import Styles from './header.module.scss'

const Header = () => {
    return (
        <div className={`${Styles.header}`}>
            <div className={`${Styles.logoContainer}`}>
                <Link href="/">
                    <a>{AppConfigs.ApplicationName}</a>
                </Link>
            </div>
            {/*<NavBar />*/}
            <Socials />
            <UserAccount />

            <AdminPanelHeader />
        </div>
    )
}

export default Header
