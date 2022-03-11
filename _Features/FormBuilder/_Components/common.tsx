import { LegacyRef, useState, ChangeEvent, useRef} from 'react'

interface ITextInputProps {
    required?: boolean
    placeholder: string
    onChange: (ref: any) => void
}
export const TextInput = ({onChange, placeholder}: ITextInputProps) => {
    const localRef = useRef<HTMLInputElement>(null)

    return(
        <input
            ref={localRef}
            onChange={() => onChange(localRef)}
            placeholder={placeholder}
            type="text"
            className={`form-control`}
        />
    )
}

interface ITextAreaInputProps {
    required?: boolean
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    placeholder: string
}

export const TextAreaInput = ({onChange, placeholder}: ITextAreaInputProps, ref: LegacyRef<HTMLTextAreaElement>) => (
    <textarea
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-control`}
    />
)

interface ICheckBoxProps {
    label: string
    required?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}


export const CheckBoxInput = ({label, onChange}: ICheckBoxProps, ref: LegacyRef<HTMLInputElement>) => (
    <div className={`CheckBox`}>
        <label>{label}</label>
        <input
            ref={ref}
            onChange={onChange}
            type="checkbox"
            className={`form-check-input`}
        />
    </div>
)

interface IImageUploaderInputProps{
    required?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => boolean
}

export const ImageUploaderInput = ({onChange}: IImageUploaderInputProps) => {
    const [images, setImages] = useState<FileList | null>(null)

    const HandleImageSelection = (e: ChangeEvent<HTMLInputElement>) => {
        // if(!onChange(e)) return
        setImages(e.target.files)
    }
    console.log('imageData', images)
    return (
        <div className={'ImageInput'}>
            <input
                type="file"
                onChange={ HandleImageSelection }
                className={`form-control`}
                multiple
            />
            {images && Array.from(images).map(img => (
                <img
                    src={URL.createObjectURL(img)}
                    className={'img-thumbnail'}
                    width="200"
                />
            ))}
        </div>
    )
}
