import {NextApiRequest, NextApiResponse} from 'next'
import { ApiHelpers } from '$utils'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method !== 'POST') return res.send("CAN'T DO THAT")
    ApiHelpers.SuccessResponse(res, '')
}

export default handler
