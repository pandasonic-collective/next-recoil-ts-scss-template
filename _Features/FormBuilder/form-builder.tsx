import {
    useState,
    useRef,
    useEffect,
    LegacyRef,
    KeyboardEvent
} from 'react'

import Styles from './form-builder.module.scss'

const INPUT_TEXT        = 'text'
const INPUT_TEXTAREA    = 'textarea'
const INPUT_PASSWORD    = 'password'
const INPUT_CHECKBOX    = 'checkbox'
const INPUT_RADIO       = 'radio'
const INPUT_SELECT      = 'select'

type InputTypes = 'text' | 'textarea' | 'password' | 'checkbox' | 'radio' | 'select'

const inputTypes: InputTypes[] = [
    INPUT_TEXT,
    INPUT_TEXTAREA,
    INPUT_PASSWORD,
    INPUT_CHECKBOX,
    INPUT_RADIO,
    INPUT_SELECT
]

interface IFormBuilderInputData {
    type: InputTypes
    name: string
    label: boolean
    id?: string
    className?: string
    containerClassName?: string
    placeholder?: string
    options?: string[]
    onChange?: () => void
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
    checked?: boolean
    ref?: LegacyRef<HTMLInputElement> | LegacyRef<HTMLSelectElement> | LegacyRef<HTMLTextAreaElement> | undefined
}

const defaultFormInput: IFormBuilderInputData = {
    type: inputTypes[0],
    name: 'Test',
    id: 'test-input',
    className: 'my_test_input',
    placeholder: 'This is a Test Input',
    label: false
}

const UpperCaseFirstLetters = (string: string) => {
    return string.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
}

const DisplayFormInput = (input: IFormBuilderInputData, key?: number | string) => {
    const containerExtraClass = input.containerClassName ? Styles[input.containerClassName] : ''
    const className = `${Styles[`${input.name}_FormInput`]} ${containerExtraClass}`
    const containerProps = {key, className}
    const label = input.label && <label>{UpperCaseFirstLetters(input.name)}</label>
    const BuildInput = (innerInput: any) => <div {...containerProps}>{label}{innerInput}</div>

    const InputBootStrapClass = () => {
        switch(input.type){
            case 'checkbox':
            case 'radio':
                return 'form-check-input'
            case 'select':
                return 'form-select'
            default:
                return 'form-control'
        }
    }

    const InputProps:any = {
        name: input.name,
        className: `${input.className} ${InputBootStrapClass()}`,
        placeholder: input.placeholder,
        onChange: input.onChange
    }

    const BuildOption = (option: string) => (
        <option key={option} value={option}>
            {UpperCaseFirstLetters(option)}
        </option>
    )

    switch (input.type){
        case 'textarea':
            InputProps.ref = input.ref as LegacyRef<HTMLTextAreaElement>
            return BuildInput(<textarea {...InputProps}/>)
        case 'select':
            InputProps.ref = input.ref as LegacyRef<HTMLSelectElement>
            const options = input.options && input.options.map(option => BuildOption(option))
            return BuildInput(<select {...InputProps}>{ options }</select>)
        default:
            InputProps.type = input.type
            InputProps.checked = input.checked
            InputProps.onKeyDown = input.onKeyDown
            InputProps.ref = input.ref as LegacyRef<HTMLInputElement>
            return BuildInput(<input {...InputProps}/>)
    }
}


const FormBuilder = () => {
    const [formBuilderData, setFormBuilderData] = useState<IFormBuilderInputData[]>([])
    const [buildInput, setBuildInput] = useState<IFormBuilderInputData>(defaultFormInput)
    const [buildInputSelectOptions, setBuildInputSelectOptions] = useState<string[]>([])

    console.log(formBuilderData)
    console.log(buildInput)

    const typeSelectRef = useRef<HTMLSelectElement>(null)
    const nameInputRef = useRef<HTMLInputElement>(null)
    const labelCheckboxRef = useRef<HTMLInputElement>(null)
    const placeholderInputRef = useRef<HTMLInputElement>(null)
    const optionsInputRef = useRef<HTMLInputElement>(null)

    const HandleBuildInputChanges = () => {
        if(
            !nameInputRef.current
            || !typeSelectRef.current
            || !labelCheckboxRef.current
            || !placeholderInputRef.current
        ) return
        const input = nameInputRef.current.value
        if(!input || input === ''){
            nameInputRef.current.value = defaultFormInput.name
        }

        setBuildInput({
            type: typeSelectRef.current.value as InputTypes,
            name: nameInputRef.current.value,
            label: labelCheckboxRef.current.checked,
            placeholder: placeholderInputRef.current.value
        })
    }

    const HandleSelectOptionsBuilder = (e: KeyboardEvent<HTMLInputElement>) => {
        if(!optionsInputRef.current) return
        const pressedEnter = e.key === 'Enter'
        if(pressedEnter){
            const options = [
                ...buildInputSelectOptions,
                optionsInputRef.current.value
            ]
            setBuildInputSelectOptions(options)
            setBuildInput({
                ...buildInput,
                options
            })
            optionsInputRef.current.value = ''
        }
    }

    const HandleRemoveOption = (index: number) => () => {
        const options = buildInputSelectOptions
        options.splice(index, 1)
        setBuildInputSelectOptions(options)
        setBuildInput({
            ...buildInput,
            options
        })
    }

    const AddInputToForm = () => {
        setFormBuilderData([
            ...formBuilderData,
            buildInput
        ])
        setBuildInput(defaultFormInput)
        setBuildInputSelectOptions([])
    }

    const BuilderInputs: IFormBuilderInputData[] = [
        {
            type: 'select',
            name: 'choose input type',
            label: true,
            containerClassName: 'BuilderOption',
            options: inputTypes,
            ref: typeSelectRef,
            onChange: HandleBuildInputChanges
        },
        {
            type: 'text',
            name: 'Name of input',
            label: true,
            placeholder: 'Ex: User or Password',
            containerClassName: 'BuilderOption',
            ref: nameInputRef,
            onChange: HandleBuildInputChanges
        },
        {
            type: 'checkbox',
            name: 'Show Label',
            label: true,
            containerClassName: 'BuilderOption',
            ref: labelCheckboxRef,
            onChange: HandleBuildInputChanges
        },
        {
            type: 'text',
            name: 'Placeholder Text',
            label: true,
            placeholder: 'The Examples Text Input',
            containerClassName: 'BuilderOption',
            ref: placeholderInputRef,
            onChange: HandleBuildInputChanges
        }
    ]

    const PreviewBuilderInput: IFormBuilderInputData = {
        ...buildInput,
        containerClassName: 'PreviewInput'
    }

    const PreviewOptionEditor: IFormBuilderInputData = {
        type: 'text',
        name: 'Add Options',
        containerClassName: 'BuilderOption',
        label: true,
        ref: optionsInputRef,
        onKeyDown: HandleSelectOptionsBuilder
    }

    const PreviewBuilderForm = formBuilderData.map( (data: IFormBuilderInputData, i) => {
        return DisplayFormInput(data, i)
    })

    return (
        <div className={Styles.FormBuilder}>
            <div className={Styles.BuilderControls}>
                <h3>Create New Input</h3>
                {BuilderInputs.map((input, i) => DisplayFormInput(input, input.name+i))}
                {PreviewBuilderInput.type === 'select' && (
                    <div className={Styles.OptionEditor}>
                        {DisplayFormInput(PreviewOptionEditor)}
                        <div className={Styles.Options}>
                            <p className={Styles.OptionsHeader}>Current Options</p>
                            {buildInputSelectOptions.map( (option, i) => (
                                <span key={option+i} className={Styles.Option}>
                                    {option}
                                    <button
                                        onClick={HandleRemoveOption(i)}
                                        className={Styles.RemoveSelectOptionButton}
                                    >X</button>
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className={Styles.BuilderPreview}>
                <div className={Styles.BuilderPreviewHeader}>
                    <h3>Preview New Input</h3>
                    <button
                        className={`${Styles.AddInputToFormBtn} btn btn-success`}
                        onClick={AddInputToForm}
                    >
                        Add Input To Form
                    </button>
                </div>
                {DisplayFormInput(PreviewBuilderInput)}
            </div>
            <div className={Styles.FormPreview}>
                <h3>Build a Form</h3>
                {PreviewBuilderForm}
            </div>
        </div>
    )
}

export default FormBuilder
