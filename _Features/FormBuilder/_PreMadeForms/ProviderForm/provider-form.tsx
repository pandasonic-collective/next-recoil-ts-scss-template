import {
    useRef,
    LegacyRef
} from 'react'
import Styles from './provider-form.module.scss'

import {FlowForm} from '$features'


interface TextInputProps {
    ref: LegacyRef<HTMLInputElement>
    placeholder: string
}
const TextInput = (props: TextInputProps) => <input {...props} type="text" className={`form-control`} />

interface TextAreaInputProps {
    ref: LegacyRef<HTMLTextAreaElement>
    placeholder: string
}

const TextAreaInput = (props: TextAreaInputProps) => <textarea {...props} className={`form-control`} />

interface CheckBoxProps {
    label: string
    ref: LegacyRef<HTMLInputElement>
}

const CheckBoxInput = ({label, ref}: CheckBoxProps) => (
    <div className={`CheckBox`}>
        <label>{label}</label>
        <input ref={ref} type="checkbox" className={`form-check-input`}/>
    </div>
)


const ProviderForm = () => {
    const refs:any = {
        ContactEmailRef: useRef<HTMLInputElement>(null),
        PhoneNumberRef: useRef<HTMLInputElement>(null),
        ListingNameRef: useRef<HTMLInputElement>(null),
        LocationRef: useRef<HTMLInputElement>(null),
        MinRef: useRef<HTMLInputElement>(null),
        MaxRef: useRef<HTMLInputElement>(null),
        TagsRef: useRef<HTMLInputElement>(null),
        AboutMyChurchRef: useRef<HTMLTextAreaElement>(null),
        TypesOfCeremoniesRef: useRef<HTMLTextAreaElement>(null),
        MissionStatementRef: useRef<HTMLTextAreaElement>(null),
        EntheoConnectMemberCheckBoxRef: useRef<HTMLInputElement>(null),
    }

    const Validated = (ref: any) => {
        return true
    }

    const HandleFormInput = (type: any) => () => {
        if(!Validated(refs[type])) return
    }

    const SubmitForm = () => {}

    const NextStep = () => {}

    return (
        <div className={Styles.ProviderForm}>
            <h2>1-on-1 Service Provider Intake Form</h2>
            <FlowForm submit={ SubmitForm }>
                <>
                    <TextInput ref={refs.ContactEmailRef} placeholder="Contact Email"/>
                    <TextInput ref={refs.PhoneNumberRef} placeholder="Phone Number"/>
                    <TextInput ref={refs.ListingNameRef} placeholder="Listing Name"/>
                </>
                <TextInput ref={refs.LocationRef} placeholder="Location"/>
                <TextAreaInput ref={refs.AboutMyChurchRef} placeholder="About My Church"/>
                <TextAreaInput ref={refs.TypesOfCeremoniesRef} placeholder="Types Of Ceremonies / Healing Modalities"/>
                <TextAreaInput ref={refs.MissionStatementRef} placeholder="Mission Statement"/>
                <>
                    <label>Range Of Donations</label>
                    <TextInput ref={refs.MinRef} placeholder="Min"/>
                    <TextInput ref={refs.MaxRef} placeholder="Max"/>
                </>
                <TextInput ref={refs.TagsRef} placeholder="Tags Associated With Your Church"/>
                <CheckBoxInput label="Are You An Active EntheoConnect Member?" ref={refs.EntheoConnectMemberCheckBoxRef} />
            </FlowForm>
        </div>
    )
}


export default ProviderForm
