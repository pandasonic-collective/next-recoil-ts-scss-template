import Link from 'next/link'

interface Props {
    link: string
    text: string
    buttonStyles?:{
        textColor?: string
        color?: string
        width?: string
        fontSize?: string
        padding?: string
        fontWeight?: string
    }
    hoverStyles?: {
        padding?: string
        fontSize?: string
        textColor?: string
        color?: string
    }
}
const Action = ({link, text, buttonStyles, hoverStyles}: Props) => {
    return (
        <>
            <style jsx>
                {`
                    .actionBtn{
                        font-family: "Montserrat", Sans-serif;
                        text-align: center;
                        font-size: ${buttonStyles?.fontSize || '.8em'};
                        font-weight: ${buttonStyles?.fontWeight || 500 };
                        letter-spacing: 1.6px;
                        fill: $white;
                        color: ${buttonStyles?.textColor || 'white'};
                        background-color: ${buttonStyles?.color || '#4B5436'};
                        border-radius: 50px 0px 50px 0px;
                        box-shadow: 2px 8px 8px 2px rgb(0 0 0 / 50%);
                        padding: ${buttonStyles?.padding || '20px 55px 20px 55px'};
                        width: ${buttonStyles?.width || '175px'};
                        height: 60px;
                        transition: all .5s ease;
                    }
                    .actionBtn:hover{
                        padding: ${ hoverStyles?.padding || '21px 56px 21px 56px'};
                        font-size: ${ hoverStyles?.fontSize || '1.1em'};
                        font-weight: bold;
                        color: ${ hoverStyles?.textColor || 'white' };
                        background-color: ${ hoverStyles?.color || '#d3b574'};
                        line-height: 1;
                        transition: all .5s ease;
                    }
                `}
            </style>
            <Link href={link}>
                <a className={`actionBtn`}>{text}</a>
            </Link>
        </>
    )
}

export default Action
