import '../assets/css/Logo.css'
import Image from 'next/image'

interface Logo {
    src: string
    alt: string
}

function Logo({ src, alt }: Logo) {
    return (
        <div className='logo'>
            <Image
                src={src}
                alt=''
                width={100}
                height={100}
                priority
            />
        </div>
    )

}

export default Logo