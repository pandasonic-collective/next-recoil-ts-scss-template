import { useState, useRef } from 'react'
import Styles from './flow-form.module.scss'

import * as Components from '../_Components/common'

interface Props {
    children: JSX.Element[]
    submit: () => void
    // nextStep?: (sectionElements: JSX.Element) => boolean
}

export const CommonComponents = Components

const checkRquiredFilled = ({props}: JSX.Element) => {
    if(props.required){

    }
    return true
}

// const checkChild = ({props}: JSX.Element) => {
//     props.children.forEach((child:JSX.Element) => {
//         console.log(child)
//         if(child.props.child){
//
//         }
//     })
// }
//
// export const ValidateSectionInputs = ({props}: JSX.Element) => {
//     if(props.children){
//
//     }else{
//         console.log(props)
//     }
// }

const FlowForm = ({children, submit}: Props) => {
    const [currentInput, setCurrentInput] = useState(0)
    const NextStep = () => {
        setCurrentInput(currentInput+1)
    }
    console.log('children',children)
    const isLastStep = currentInput === children.length-1
    return (
        <div className={Styles.StepForm}>
            <div className={Styles.FormInputs}>
                {children[currentInput]}
            </div>
            <div className={Styles.StepFormAction}>
                <button
                    className={`joinLink`}
                    onClick={isLastStep ? submit : NextStep}
                >{isLastStep ? 'Submit' : 'Next'}</button>
            </div>
        </div>
    )
}


export default FlowForm
