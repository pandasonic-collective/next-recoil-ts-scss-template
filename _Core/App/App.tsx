//Modules
//🦀🦀🦀🦀🦀🦀🦀🦀
import type {AppProps} from 'next/app'
import {useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {useSetRecoilState} from 'recoil'

//User Atoms
import {User} from '$core'

//FireBase
import {FireData, FireAuth} from '$firebase'

//Interfaces
import {IUser, DefaultUser} from '$interface/IUser'


const App = ({ Component, pageProps }: AppProps) => {
    // const {UserAtoms} = User
    // const {User_Data_Atom, Auth_User_Atom} = UserAtoms
    //
    // const setUserData = useSetRecoilState(User_Data_Atom)
    // // const setAuthUser = useSetRecoilState(Auth_User_Atom)
    //
    //
    // const GetUserData = async (uid: string ) => {
    //     if(uid === undefined) return
    //     const userDocRef = FireData.CreateDocumentRef('users', uid)
    //     const userSnap = await FireData.GetDocById(userDocRef)
    //     console.log('User Snap >>', userSnap)
    //     if(userSnap.exists()) {
    //         const userData: IUser = userSnap.data() as IUser
    //         setUserData(userData)
    //     }
    // }
    //
    // useEffect(() => {
    //     const auth = FireAuth.auth
    //     console.log('AUTH >>', auth)
    //     onAuthStateChanged(auth, user => {
    //         console.log('USER >>',user)
    //         if(user) {
    //             GetUserData(user.uid)
    //         }else{
    //             setUserData(DefaultUser)
    //         }
    //     })
    // }, [])
    return <Component {...pageProps} />
}

export default App
