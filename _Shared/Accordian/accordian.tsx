//Modules
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faSpa
} from '@fortawesome/free-solid-svg-icons'

//Styles
import Styles from './accordian.module.scss'

//interfaces
interface Props {
    buttonText: string
    content: JSX.Element
    showIcon?: boolean
}

const Accordian = ({buttonText, content, showIcon}: Props) =>{
    const [isOpened, setIsOpened] = useState(false)
    const toggleIsOpened = () => setIsOpened(!isOpened)
    return (
        <div className={`${Styles.accordian}`}>
            <div className={`${Styles.accButton} ${isOpened ? Styles.isOpened : ''}`} onClick={() => toggleIsOpened()}>
                { buttonText }
                { showIcon ?  (
                    <FontAwesomeIcon icon={faSpa} />
                ): null }
            </div>
            <div className={`${Styles.accContent} ${isOpened ? Styles.isOpened : ''}`}>
                { content }
            </div>
        </div>
    )
}

export default Accordian
