//Modules
import Link from 'next/link'

//Feature
import {LoginForm} from '$features'

//Styles
import Styles from './login.module.scss'

const LoginPage = () => {
    return (
        <div className={Styles.LoginPage}>
            <div className={Styles.LoginContainer}>
                <LoginForm />
                <div className={Styles.Register}>
                    Not a member yet? <Link href={'/register'}>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
