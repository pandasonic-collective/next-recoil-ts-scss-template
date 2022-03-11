//Modules
import { useRef, useState } from 'react'
import axios from 'axios'

//Validators
import {Validators} from '$utils'
const {ValidateName, ValidateEmail} = Validators

//Styles
import Styles from './sign-up.module.scss'

const SignUp = () => {
    const [preReg, setPreReg] = useState(false)
    const [errs, setErrs] = useState<string[]>([])

    const firstNameRef = useRef<any>()
    const lastNameRef = useRef<any>()
    const emailRef = useRef<any>()

    const HandleSignUp = () => {
        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value
        const email = emailRef.current.value

        if(!ValidateName(firstName) || !ValidateName(lastName) || !ValidateEmail(email)) {
            const valErrs = []
            if(!ValidateName(firstName)) valErrs.push('First Name is required.')
            if(!ValidateName(lastName)) valErrs.push('Last Name is required.')
            if(!ValidateEmail(email)) valErrs.push('Email Address is required.')
            setErrs(valErrs)
            return
        }

        axios.post('/api/firebase/preRegister/add', {firstName, lastName, email})
        .then( resp => {
            if(resp.data.err) {
                setErrs([resp.data.msg])
            }else{
                setPreReg(true)
            }
        })
        .catch(e => console.log(e))
    }

    if(preReg) return (
        <div className={Styles.SignUp}>
            <div className={Styles.PopConfirmMessage}>
                <h3>Thank You!</h3>
                <p>For Pre-Registering!</p>
            </div>
        </div>
    )

    return (
        <div className={Styles.SignUp}>
            <div className={Styles.PopConfirmMessage}>
                <h3>Pre-Register</h3>
                <p>Pre-Reg Message</p>
            </div>
            <div className={Styles.Form}>
                {errs && errs.length > 0 && <span className={Styles.EmailExists}>{errs.map(e=><p>{e}</p>)}</span>}
                <input className={`form-control`} type="text" ref={firstNameRef} placeholder="First Name"/>
                <input className={`form-control`} type="text" ref={lastNameRef} placeholder="Last Name"/>
                <input className={`form-control`} type="text" ref={emailRef} placeholder="Email Name"/>
                <button className={`${Styles.SubmitBtn} joinLink`} onClick={() => HandleSignUp()}>Pre-Register</button>
            </div>
        </div>
    )
}

export default SignUp
