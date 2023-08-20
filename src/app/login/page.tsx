import './Login.css'
import LeftSideContainer from '@/components/LeftSideContainer'
import RightSideContainerFirst from '@/components/RightSideContainer1'
import RightSideContainerSecond from '@/components/RightSideContainer2'

function Login() {
    return (
        <main>
            <div className='main-container'>
                <div className='left-side'>
                    <LeftSideContainer></LeftSideContainer>
                </div>
                <div className='right-side'>
                    <RightSideContainerFirst></RightSideContainerFirst>
                    {/* <RightSideContainerSecond></RightSideContainerSecond> */}
                </div>
            </div>
        </main>

    )

}

export default Login