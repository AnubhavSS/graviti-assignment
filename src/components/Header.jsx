import Image from 'next/image'
import logo from '../../public/logo.png'

const Header = () => {
  return (
    <div className='hidden md:block w-full h-[80px] bg-white relative '>
        <Image src={logo} width={160} height={69} alt='logo' className='absolute top-[6px] left-[67px]'/>
    </div>
  )
}

export default Header