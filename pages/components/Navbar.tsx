import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi'

const Nav = () => {
    let name;
    const [  open, setOpen ] = useState( false )
    const [ seo, setSeo ] = useState("Test")
  return (
    <>
    <header className="border-b border-gray-300 py-2 navbar1">
        <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
            <Link href="/">
        <Image
            src="/logo87.png"
            alt='logo'
            width={80}
            height={80}
            className='cursor-pointer'
          />
          </Link>
          <h1
          className='text87 text-center'>Code87</h1>
          <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />
          <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
            <ul className="text-base text-white lg:flex lg:justify-between">
                <li className="lg:px-5 py-2 hover:text-red-600 font-semibold">
                    <Link href="/">หน้าแรก</Link>

                </li>
                <li className="lg:px-5 py-2 hover:text-red-600 font-semibold">
                    <Link href="#service">บริการของเรา</Link>
    

                </li>
                <li className="lg:px-5 py-2 hover:text-red-600 font-semibold">
                    <Link href="/#about">เกี่ยวกับเรา</Link>

                </li>
                <li className="lg:px-5 py-2 hover:text-red-600 font-semibold">
                    <Link href="/blog">บทความ</Link>

                </li>

                <li className="lg:px-5 py-2 hover:text-red-600 font-semibold">
                <Link href="/contact">ติดต่อเรา</Link>

                </li>
                
            </ul>
         </nav>
        </div>

    </header>

    </>
    
  )
}

export default Nav