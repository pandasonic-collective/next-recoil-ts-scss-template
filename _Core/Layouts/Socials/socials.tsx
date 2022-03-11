//Modules
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faYoutube
} from '@fortawesome/free-brands-svg-icons'
//Styles
import Styles from './socials.module.scss'
const Socials = () => {
    return (
        <div className={`${Styles.socials}`}>
            <Link href="https://www.youtube.com/">
                <a className={`${Styles.socialLink}`}>
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </Link>
            <Link href="https://www.facebook.com/">
                <a className={`${Styles.socialLink}`}>
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
            </Link>
        </div>
    )
}
export default Socials
