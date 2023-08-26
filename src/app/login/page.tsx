import './Login.css'
import LeftSideContainer from '@/components/LeftSideContainer'
import Logo from '@/components/Logo'
import FormLogin from '@/components/FormLogin'

function Login() {
    return (
        <main className='container flex mx-auto  justify-center items-center h-screen'>
            <div className='main-container'>
                <div className='left-side'>
                    <LeftSideContainer/>
                </div>
                <div className='right-side'>
                    <Logo src="/img/Logo.svg" alt='LogoSena'></Logo>
                    <FormLogin/>
                </div>
            </div>
        </main>
    )

}

export default Login