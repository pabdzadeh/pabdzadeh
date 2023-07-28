import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="flex min-h-[80vh] flex-col items-center  p-24">
        <div className='text-[55px] text-center w-[33%] font-bold' style={{ fontFamily: 'Source Code Pro' }}>
          Hello, I’m
          Pedram Abdzadeh Ziabari
        </div>
        <div className='w-[50%] text-[#898989] text-2xl font-bold text-justify'>
          I am a UI Engineer at DFreight, where I develop user-centered interfaces for cutting-edge technology products.
          I work with a talented team to implement visually appealing and intuitive designs that enhance user experience.
          I am passionate about using technology to implement beautiful and functional designs that solve real-world problems.
        </div>
      </main>
    </>

  )
}
