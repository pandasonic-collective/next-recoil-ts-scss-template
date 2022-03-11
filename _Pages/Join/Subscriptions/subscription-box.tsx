//Modules
import Link from 'next/link'
//Styles
import Styles from './subscription-box.module.scss'

//Configs
import {AppConfigs} from '$core'

interface Props {
    headerRecurrenceText: string
    symbol: string
    amount: string
    recurrenceText: string
    link: string
    savings?: string | null
}

const SubBox = ({headerRecurrenceText, symbol, amount, recurrenceText, link, savings = null}: Props) => {
    return (
        <Link href={link}>
            <a className={`${Styles.subbox}`}>
                <div className={`${Styles.shade}`} >
                    <p className={`${Styles.header}`}>
                        {AppConfigs.ApplicationName} {headerRecurrenceText}
                    </p>
                    <p className={`${Styles.amount}`}>
                        <span className={`${Styles.amountSybol}`}>
                            { symbol }
                        </span>
                        { amount }
                    </p>
                    <p className={`${Styles.recurrenceText}`}>
                        { recurrenceText }
                    </p>
                    { savings ? (
                        <div className={`${Styles.savingValue}`}>
                            <div className={`${Styles.flag}`}/>
                            <p>{ savings }</p>
                        </div>
                    ) : (<div/>) }
                        <div className={`joinLink ${Styles.joinUs}`}>Join Us</div>
                </div>
            </a>
        </Link>
    )
}

export default SubBox
