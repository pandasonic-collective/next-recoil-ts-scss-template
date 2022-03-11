//Components
import SubBox from './subscription-box'
//Styles
import Styles from './subscriptions.module.scss'

const Subscriptions = () => {
    return (
        <div className={`${Styles.subscriptions}`}>
            <SubBox
                headerRecurrenceText="Monthly"
                symbol="$"
                amount="5.99"
                recurrenceText="PER MONTH"
                link="/test"
            />
        </div>
    )
}

export default Subscriptions
