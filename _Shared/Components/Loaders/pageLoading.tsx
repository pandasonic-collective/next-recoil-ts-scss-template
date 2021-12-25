import {BounceLoader} from 'react-spinners'

const PageLoading = () => (
    <div style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px'
    }}>
        <BounceLoader color={'#cc22ff'}/>
    </div>
)
export default PageLoading
