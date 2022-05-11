//Modules
import {useRef, useState, ChangeEvent} from 'react'

//Firebase
import {FireAuth} from '$firebase'

//Styles
import Styles from './styles.module.scss'
const defaultCreds = {
    email: '',
    password: ''
}
const LoginPage = () => {
    const [creds, setCreds] = useState<{email: string, password: string}>(defaultCreds)
    const credsRef = useRef(defaultCreds)
    const [errors, setErrors] = useState<string[]>([])

    const HandleInput = (type: string) => ({target}: ChangeEvent<HTMLInputElement>) => {
        const value = target.value
        const newCreds = {
            ...creds,
            [type]: value
        }
        console.log(newCreds)
        setCreds(newCreds)
        credsRef.current = newCreds
    }

    const IsValidLoginCreds = () => {
        const {email, password} = credsRef.current
        const errs = []
        if(email === '') errs.push('Email is Required')
        if(password === '') errs.push('Password is Required')
        //check email format
        //Handle all other checks
        if(errs.length > 0) {
            setErrors(errs)
            return false
        }
        return true
    }

    const HandleLogin = async () => {
        if(!IsValidLoginCreds()) return
        const {email, password} = credsRef.current
        const update = await FireAuth.EmailPass.signInExistingUser(email, password)
        console.log("LOGIN ATTEMPT >> ",update)
    }
    return (
        <div className={Styles.LoginForm}>
            <h1>Login:</h1>
            <div className={Styles.LoginErrors}>
                {errors.map((err,i) => <span key={i} className={Styles.LoginError}>{err}</span>)}
            </div>
            <input
                type="text"
                className={`${Styles.EmailInput} form-control`}
                value={creds.email}
                onChange={HandleInput('email')}
                placeholder="Email Address"
            />
            <input
                type="password"
                className={`${Styles.PasswordInput} form-control`}
                value={creds.password}
                onChange={HandleInput('password')}
                placeholder="Password"
            />
            <button
                className={`btn btn-primary`}
                onClick={HandleLogin}
            >Login</button>
        </div>
    )
}

export default LoginPage
