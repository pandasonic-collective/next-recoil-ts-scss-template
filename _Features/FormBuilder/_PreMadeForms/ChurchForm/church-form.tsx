import { useRef, LegacyRef, useState } from 'react'
import Styles from './church-form.module.scss'

import {FlowForm, CommonFlowFormComponents} from '$features'

const ChurchForm = () => {
    const {TextInput, TextAreaInput, CheckBoxInput, ImageUploaderInput } = CommonFlowFormComponents
    const [state, setState] = useState({
        ContactEmail: null,
        PhoneNumber: null,
        ListingName: null,
        Location: null,
        Min: null,
        Max: null,
        Tags: null,
        AboutMyChurch: null,
        TypesOfCeremonies: null,
        MissionStatement: null,
        EntheoConnectMemberCheckBox: null,
        Images: null
    })


    const ValidateInput = (type: string) => {
        return true
    }


    const HandleFormInput = (type: string) => (ref: any) => {
        setState({
            ...state,
            [type]: ref.current
        })
        return ValidateInput(type)
    }

    const SubmitForm = () => {}

    console.log(state)

    return (
        <div className={Styles.ChurchForm}>
            <h2>Church/Retreat Intake Form</h2>
            <FlowForm submit={ SubmitForm }>
                <>
                    <TextInput
                        key={1}
                        onChange={HandleFormInput('ContactEmail')}
                        placeholder="Contact Email"
                        required
                    />
                    <TextInput
                        onChange={HandleFormInput('PhoneNumber')}
                        placeholder="Phone Number"
                        required
                    />
                    <TextInput
                        onChange={HandleFormInput('ListingName')}
                        placeholder="Listing Name"
                        required
                    />
                </>
                <TextInput
                    onChange={HandleFormInput('Location')}
                    placeholder="Location"
                />
                <TextAreaInput
                    onChange={HandleFormInput('AboutMyChurch')}
                    placeholder="About My Church"
                />
                <TextAreaInput
                    onChange={HandleFormInput('TypesOfCeremonies')}
                    placeholder="Types Of Ceremonies / Healing Modalities"
                />
                <TextAreaInput
                    onChange={HandleFormInput('MissionStatement')}
                    placeholder="Mission Statement"
                />
                <>
                    <label>Range Of Donations</label>
                    <TextInput
                        onChange={HandleFormInput('Min')}
                        placeholder="Min"
                    />
                    <TextInput
                        onChange={HandleFormInput('Max')}
                        placeholder="Max"
                    />
                </>
                <TextInput
                    onChange={HandleFormInput('Tags')}
                    placeholder="Tags Associated With Your Church"
                />
                <CheckBoxInput
                    onChange={HandleFormInput('EntheoConnectMemberCheckBox')}
                    label="Are You An Active EntheoConnect Member?"
                    required
                />
                <ImageUploaderInput
                    onChange={HandleFormInput('Images')}
                />
            </FlowForm>
        </div>
    )
}


export default ChurchForm
