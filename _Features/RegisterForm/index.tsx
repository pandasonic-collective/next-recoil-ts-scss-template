//Modules
import {useRef, useState, ChangeEvent} from 'react'

//Firebase
import {FireAuth, FireData} from '$firebase'

//Styles
import Styles from './regForm.module.scss'
interface IRegisterFields {
    fname: string
    lname: string
    zip: string
    email: string
    password: string
    passwordMatch: string
}
const defaultCreds = {
    fname: '',
    lname: '',
    zip: '',
    email: '',
    password: '',
    passwordMatch: '',
}
const RegisterPage = () => {
    const [creds, setCreds] = useState<IRegisterFields>(defaultCreds)
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
        const {success, user} = await FireAuth.EmailPass.createNewUser(email, password)
        if(!success || !user) return setErrors(['Email already exists'])
        const userDocRef = FireData.CreateDocumentRef('users', user.uid)
        const userDoc = await FireData.AddDocWithIdTo(userDocRef, {
            first_name: creds.fname,
            last_name: creds.lname,
            email: creds.email,
            zip: creds.zip
        })
        console.log("Register ATTEMPT >> ", userDoc)
    }
    return (
        <div className={Styles.RegisterForm}>
            <h1>Register:</h1>
            <div className={Styles.RegisterErrors}>
                {errors.map((err,i) => <span key={i} className={Styles.RegisterError}>{err}</span>)}
            </div>
            <input
                type="text"
                className={`${Styles.NameInput} form-control`}
                value={creds.fname}
                onChange={HandleInput('fname')}
                placeholder="First Name"
                required
            />
            <input
                type="text"
                className={`${Styles.NameInput} form-control`}
                value={creds.lname}
                onChange={HandleInput('lname')}
                placeholder="Last Name"
                required
            />
            <input
                type="text"
                className={`${Styles.ZipInput} form-control`}
                value={creds.zip}
                onChange={HandleInput('zip')}
                placeholder="Zip / Postcode (optional)"
            />
            <input
                type="text"
                className={`${Styles.EmailInput} form-control`}
                value={creds.email}
                onChange={HandleInput('email')}
                placeholder="Email Address"
                required
            />
            <input
                type="password"
                className={`${Styles.PasswordInput} form-control`}
                value={creds.password}
                onChange={HandleInput('password')}
                placeholder="Password"
                required
            />
            <input
                type="password"
                className={`${Styles.PasswordInput} form-control`}
                value={creds.passwordMatch}
                onChange={HandleInput('passwordMatch')}
                placeholder="Confirm Password"
                required
            />
            <button
                className={`btn btn-primary`}
                onClick={HandleLogin}
            >Register</button>
        </div>
    )
}

export default RegisterPage
