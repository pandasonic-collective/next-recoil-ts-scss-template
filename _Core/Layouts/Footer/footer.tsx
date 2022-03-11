//Modules
import Link from 'next/link'
import {Nav, NavItem} from 'reactstrap'

import {AppConfigs} from '$core'
//Styles
import Styles from './footer.module.scss'
const Footer  = () => {
    const amode = false

    const year = new Date().getFullYear();
    
    return (
        <div className={`${Styles.footer}`}>
            <div className={`${Styles.innerFooter}`}>
                {/*<Image src={} className="img-fluid" placeholder="blur" alt="Entheo Eye Footer"/>*/}
            </div>
            {!amode && (
                <>
                <hr />
                <div className={`${Styles.footerNav}`}>
                    <Nav className={`${Styles.footerNavLinks}`}>
                        <NavItem>
                            <Link href="/"><a>Home</a></Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/about"><a>About</a></Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/privacy"><a>Privacy Policy</a></Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/terms"><a>Terms of Service</a></Link>
                        </NavItem>
                    </Nav>
                </div>
                <hr />
                </>
            )}

            <p className={`${Styles.copyrightText}`}>
                <span className={`${Styles.copyright}`}>&copy;</span> {AppConfigs.ApplicationName} {year}. ALL RIGHTS RESERVED.
            </p>
        </div>
    )
}

export default Footer
