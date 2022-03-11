//Modules
import {useRecoilValue} from 'recoil'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faUser
} from '@fortawesome/free-solid-svg-icons'

//User Atoms
import {User} from '$core'

//Styles
import Styles from './user-account.module.scss'




const UserAccount = () => {
    const {UserAtoms} = User
    const {User_Data_Atom} = UserAtoms
    const user = useRecoilValue(User_Data_Atom)

    const link = !user ? '/login' : '/account'
    const ariaLabel = !user ? 'Go to login page' : 'Go to user account'

    return (
        <div className={`${Styles.userAccount}`}>
            <Link href={link}>
                <a aria-label={ariaLabel}>
                    <FontAwesomeIcon icon={faUser}/>
                    {!user ? 'Login' : `${user.first_name}`}
                </a>
            </Link>
        </div>
    )
}

export default UserAccount
