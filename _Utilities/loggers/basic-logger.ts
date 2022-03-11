// import { createLogger, transports, format } from 'winston'
// const {timestamp, combine, printf, colorize} = format
//
// const BasicFormat = printf(({level, message, timestamp}) => `[${timestamp}] ${level} -> ${message}`)
//
// export const BasicLogger = () => {
//     const debug = process.env.DEBUG
//     return createLogger({
//         level: debug ? 'debug' : process.env.LOGGING_LEVEL,
//         format: combine(
//             timestamp(),
//             colorize(),
//             BasicFormat
//         ),
//         transports:[
//             new transports.Console()
//         ]
//     })
// }
export {}
