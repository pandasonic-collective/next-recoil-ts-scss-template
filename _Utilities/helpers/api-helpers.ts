import { NextApiResponse } from 'next'

// import {logger} from '$utils'

export const ReturnMessage = (res: NextApiResponse, err: boolean, msg: string) => res.send({err, msg})


export const SuccessResponse = (res: NextApiResponse, data: any) => {
    // if(process.env.DEBUG) {
    //     logger.basic.info(`Success: ${data}`)
    // }
    res.send(data)
}
