//Modules
import Link from 'next/link'
//Styles
import Styles from './navbarBtn.module.scss'

interface Props {
    link: string
    title: string
    className?: string
}
const NavBarBtn = ({link, title, className}: Props) => {
    return (
        <Link href={ link }>
            <a title={ title } className={`${Styles.navbarBtn} ${className}`}>
                {title}
            </a>
        </Link>
    )
}

export default NavBarBtn
