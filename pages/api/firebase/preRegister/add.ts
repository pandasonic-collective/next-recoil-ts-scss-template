import {NextApiRequest, NextApiResponse} from 'next'
import { FireData } from '$firebase'
import { ApiHelpers } from '$utils'

//User PreRegister
const PreRegCollectionName = 'pre-register'
const PreRegCollectionRef = FireData.CreateCollectionRef(PreRegCollectionName)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const firstName: string = req.body.firstName
    const lastName: string = req.body.lastName
    const email:string = req.body.email

    if(!firstName || !lastName || !email) return ApiHelpers.ReturnMessage(res, true, 'Not all fields where provided...')

    const q_res = await FireData.GetDocsWhere(PreRegCollectionRef, 'email', '==', email)
    if(q_res.size > 0) return ApiHelpers.ReturnMessage(res, true,'Email already Exists...')

    await FireData.AddDocTo(PreRegCollectionRef, {
        email: email.toLowerCase(),
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`
    })

    ApiHelpers.ReturnMessage(res, false, 'User Pre-Registered')
}

export default handler
