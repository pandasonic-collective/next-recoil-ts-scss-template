//Modules
import {useRecoilValue} from 'recoil'
import { useState } from 'react'
import { Collapse, Navbar, Nav, NavItem } from 'reactstrap'

//User Atoms
import {User} from '$core'

//Components
import NavBarBtn from './NavBarBtn/navbarBtn'

//Styles
import Styles from './navbar.module.scss'


const SiteNavBar = () => {
    const {UserAtoms} = User
    const {User_Data_Atom} = UserAtoms
    const user = useRecoilValue(User_Data_Atom)

    const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Navbar expand="md" className={Styles.navbar}>
            <Collapse isOpen={ isOpen } navbar className={`${Styles.Menu}`}>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavBarBtn link="/" title="Home" />
                    </NavItem>
                    <NavItem>
                        <NavBarBtn link="/about" title="About" />
                    </NavItem>
                    <NavItem>
                        <NavBarBtn link="/services" title="Services" />
                    </NavItem>
                    {!user && (
                        <NavItem>
                            <NavBarBtn link="/join" title="Join" className={`cta-text`}/>
                        </NavItem>
                    )}
                </Nav>
            </Collapse>
        </Navbar>
    )
}


export default SiteNavBar
