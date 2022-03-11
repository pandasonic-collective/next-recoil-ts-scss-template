import Styles from './news-letter-form.module.scss'

const NewsLetterForm = () => {
    return (
        <div className={`${Styles.newLetterForm}`}>
            <div className={`${Styles.newLetterFormHeader}`}>Subscribe To Our Newsletter</div>
            <input className={`${Styles.input} form-control`} placeholder="Your Name" />
            <input className={`${Styles.input} form-control`} placeholder="Your Email" />
            <button className={`${Styles.newLetterFormBtn}`}>SUBSCRIBE</button>
        </div>
    )
}

export default NewsLetterForm
