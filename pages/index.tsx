import {LandingPage} from '$pages'

const user = null

const IndexPage = () => {
    if(!user) return <LandingPage />
}

export default IndexPage
