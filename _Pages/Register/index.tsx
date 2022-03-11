//Modules
import Link from 'next/link'

//Feature
import {RegisterForm} from '$features'

//Styles
import Styles from './register.module.scss'

const RegisterPage = () => {
    return (
        <div className={Styles.RegisterPage}>
            <div className={Styles.RegisterContainer}>
                <RegisterForm />
                <div className={Styles.Login}>
                    Already a Member? <Link href={'/login'}>Log In</Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
