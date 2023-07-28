import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className='min-h-[10vh] p-4'>
        <nav className='flex gap-4'>
          <Link href="./" className='bg-white h-10 p-2 text-black rounded-md'>
            Home
          </Link>
          <Link href="./publications" className='bg-white h-10 p-2 text-black rounded-md'>
            Publications
          </Link>
          <Link href="./">

          </Link>
        </nav>
      </header>
      <main className="flex min-h-[80vh] flex-col items-center justify-between p-24">


      </main>
    </>

  )
}
