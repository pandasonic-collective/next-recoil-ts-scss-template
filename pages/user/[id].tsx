//Modules
import {useRouter} from 'next/router'
import {useRecoilValue, useRecoilState} from 'recoil'

//User
import {User} from '$core'

const UserPage = () => {
    const router = useRouter()
    const {id} = router.query

    const {UserAtoms, UserSelectors} = User
    const {User_Data_AtomFamily} = UserAtoms
    const user = useRecoilValue(User_Data_AtomFamily(String(id)))

    const {UserFullName_Selector} = UserSelectors
    const [fullname, setFullName] = useRecoilState(UserFullName_Selector(String(id)))


    return (
        <div className="User">
            <div>{id}</div>
            <div>{user.email}</div>
            <div>{user.first_name}</div>
            <div>{user.last_name}</div>
            <div>{fullname}</div>
            <div>{user.zip}</div>
            <input type="text" className="form-control" onChange={({target}) => setFullName({
                fName: target.value,
                lName: 'Soemthing else'
            })} />
        </div>
    )
}

export default UserPage
