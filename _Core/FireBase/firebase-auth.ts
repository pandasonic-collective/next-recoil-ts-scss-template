import {auth as Auth} from './firebase-conf'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    UserCredential
} from "firebase/auth"

export const auth = Auth

const HandleAuthSuccess = (userCredential: UserCredential) => {
    console.log("User Creds >> ",userCredential)
    return {user: userCredential.user, success: true}
}
const HandleAuthFail = (error: any) => {
    console.log("User Errors >> ",error)
    return {success: false, error, user: null}
}

export const EmailPass = {
    createNewUser: async (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => HandleAuthSuccess(userCredential))
        .catch((error) => HandleAuthFail(error)),
    signInExistingUser: async (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => HandleAuthSuccess(userCredential))
        .catch((error) => HandleAuthFail(error))
}
