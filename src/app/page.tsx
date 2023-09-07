import { Kristi } from 'next/font/google'
import Image from 'next/image';
import profile from '../../public/IMG_20230218_222932_447.jpg';
import DigiKalaLogo from '../../public/footerlogo2.webp';
import DFreightLogo from '../../public/android-chrome-384x384.png';
import WizeAnalytics from '../../public/wizeanalytics_logo_en.png';
import FanAvaLogo from '../../public/1586328926925.jpeg';
import DFrieghtWorkSample from '../../public/Screenshot from 2023-09-07 14-21-38.png';
import DigikalaWorkSample from '../../public/Screenshot from 2023-09-07 14-23-23.png';
import WizeWorkSample from '../../public/Screenshot from 2023-09-07 14-50-44.png';
import FanAvaWorkSample from '../../public/Screenshot from 2023-09-07 15-17-25.png';
import { useRouter } from "next/navigation";


import { Figure } from '@/components';
import { Button, Tooltip } from 'antd';
import Link from 'next/link';

const kristi = Kristi({ weight: '400', subsets: ['latin'] });

export default function Home() {
  // const router = useRouter();

  return (
    <>
      <main className="flex lg:flex-row flex-col  h-auto lg:h-[90vh] items-center w-full">
        <section className='bg-[#4831d4] w-full lg:w-[70vw] h-[90vh] relative p-24 flex flex-col justify-center gap-4 items-center lg:items-start'>
          <div className={`${kristi.className} text-6xl font-bold text-[#ccf381] lg:absolute left-24 top-10`}
          >
            Pedram Abdzadeh
          </div>

          <h1 className='lg:w-80 font-bold text-[#ccf381] text-5xl text-center lg:text-left'>
            Front-End Developer.
          </h1>
          <div className='lg:w-[50%] text-white text-lg  text-justify' >
            I am a Front-End Engineer at DFreight, where I develop user-centered interfaces for cutting-edge technology products.
            I work with a talented team to implement visually appealing and intuitive designs that enhance user experience.

          </div>
          <div className='flex flex-col lg:flex-row gap-8 text-[#ccf381] mt-20'>
            <div className='w-[300px] text-justify'>
              I am passionate about using technology to implement beautiful and functional designs that solve real-world problems.
            </div>
            <div className='w-[300px] text-justify'>
              I have M.S. degree in Network Science and worked on Deepfake detection using
              Deep Learning. So you can tell I am also a ML enthusiast.
            </div>
          </div>

        </section>
        <section className='lg:w-[30vw] w-full bg-[#ccf381] h-[70vh] lg:h-[90vh] relative items-center flex flex-col justify-center'>
          <Image src={profile} alt="Pedram Abdzadeh Profile" width={400} height={200}
            className='lg:absolute relative lg:left-[-200px] lg:top-[25%] z-10' >

          </Image>
          <div className='hidden lg:block lg:absolute lg:left-[-400px] top-[10%] max-w-[100%]'>
            <Figure />
          </div>

          <div className='lg:absolute hidden lg:block lg:left-[-150px] top-[30%] border-white border h-[400px] w-[400px]' />
        </section>
      </main>
      <main className='flex  flex-col  h-auto  items-center w-full'>

        <section className='w-full lg:w-full h-[85vh] relative p-24 flex flex-col justify-start gap-4 items-center lg:items-start'>
          <div className='text-[#4831d4] font-bold text-[50px] mb-10 flex w-full'>
            Experience
          </div>
          <div className='flex lg:flex-row flex-col items-center gap-4'>
            <div className='lg:w-[70%] w-full flex-col flex gap-8 items-center'>
              <Tooltip defaultOpen title="DFreight" className='mb-[-50px] z-10 text-black'>
                <Image src={DFreightLogo} alt="DFreight Logo" width={100} height={100}
                  className='shadow-sm' >

                </Image>
              </Tooltip>
              <Image src={DFrieghtWorkSample} alt="Digikala Work Sample" width={10000}
                className='rounded-xl shadow-md ]' >

              </Image>


            </div>
            <div className='lg:w-[30%] w-full flex flex-col items-center gap-2'>
              <div className='font-bold text-4xl'>
                DFreight
              </div>
              <div>
                An international freight forwarding company located at Dubai
              </div>
              <div className={`${kristi.className} font-bold text-4xl`}>
                Sep 2022-Present
              </div>
              <div>
                Senior Frontend Developer at Order Management System
              </div>
              <Link href={'https://panel.dfreight.org'} className='text-[#4831d4]' target='_blank'>
                panel.dfreight.org
              </Link>
            </div>
          </div>
        </section>
        <section className='w-full lg:w-full h-[85vh] relative p-24 flex flex-col justify-start gap-4 items-center lg:items-start'>
          <div className='flex lg:flex-row flex-col-reverse items-center gap-4'>
            <div className='lg:w-[30%] w-full flex flex-col items-center gap-2'>
              <div className='font-bold text-4xl'>
                Digikala
              </div>
              <div>
                Largest retail company in Middle East
              </div>
              <div className={`${kristi.className} font-bold text-4xl`}>
                Apr 2020 - Sep 2021
              </div>
              <div>
                Frontend Developer at Marketplace and Shopping Experience
              </div>
              <Link href={'https://digikala.com'} className='text-[#e6123d]' target='_blank'>
                Digikala.com
              </Link>
            </div>
            <div className='lg:w-[70%] w-full flex-col flex gap-8 items-center'>
              <Tooltip defaultOpen title="Digikala" className='mb-[-50px] z-10 text-black'>
                <Image src={DigiKalaLogo} alt="Digikala Logo" width={100} height={100}
                  className='shadow-sm' >

                </Image>
              </Tooltip>
              <Image src={DigikalaWorkSample} alt="DFreight Work Sample" width={10000}
                className='rounded-xl shadow-md ]' >

              </Image>
            </div>
          </div>
        </section>
        <section className='w-full lg:w-full h-[90vh] relative p-24 flex flex-col justify-start gap-4 items-center lg:items-start'>
          <div className='flex lg:flex-row flex-col items-center gap-4'>
            <div className='lg:w-[70%] w-full flex-col flex gap-8 items-center '>
              <Tooltip defaultOpen title="Wize Analytics" className='mb-[-60px] z-10 text-black'>
                <Image src={WizeAnalytics} alt="Wize Analytics Logo" width={100} height={100}
                  className='shadow-sm' >

                </Image>
              </Tooltip>
              <Image src={WizeWorkSample} alt="Wize Analytics Work Sample" width={10000}
                className='rounded-xl shadow-md p-2 bg-white' >

              </Image>
            </div>
            <div className='lg:w-[30%] w-full flex flex-col items-center gap-2'>
              <div className='font-bold text-4xl'>
                Wize Analytics
              </div>
              <div className={`${kristi.className} font-bold text-2xl`}>
                Apr 2019 - Mar 2020
              </div>
              <div>
                Main Frontend Developer
              </div>
              <Link href={'https://wizeanalytics.com'} className='text-[#4831d4]' target='_blank'>
                wizeanalytics.com
              </Link>
            </div>
          </div>
        </section>
        <section className='w-full lg:w-full h-[85vh] relative p-24 flex flex-col justify-start gap-4 items-center lg:items-start'>
          <div className='flex lg:flex-row flex-col-reverse items-center gap-4'>
            <div className='lg:w-[30%] w-full flex flex-col items-center gap-2'>
              <div className='font-bold text-4xl'>
                Fanava Group
              </div>
              <div className={`${kristi.className} font-bold text-2xl`}>
                June 2018 - Sep 2018
              </div>
              <div>
                Frontend and Backend Intern
              </div>
              <Link href={'https://en.fanava.com/'} className='text-[#e6123d]' target='_blank'>
                fanava.com
              </Link>
            </div>
            <div className='lg:w-[70%] w-full flex-col flex gap-8 items-center'>
              <Tooltip defaultOpen title="Fanava" className='mb-[-70px] z-10 text-black'>
                <Image src={FanAvaLogo} alt="FanAva Logo" width={100} height={100}
                  className='shadow-sm rounded-xl' >

                </Image>
              </Tooltip>
              <Image src={FanAvaWorkSample} alt="FanAva Work Sample" width={10000}
                className='rounded-xl shadow-md ]' >

              </Image>
            </div>
          </div>
        </section>
      </main>
      <main className='bg-[#3d155f] h-[90vh] relative flex flex-col lg:flex-row'>
        <section className='flex flex-col gap-14 w-full lg:pl-[200px] lg:pt-[200px] p-10 '>
          <div className={`${kristi.className} text-6xl font-bold text-[#ccf381] lg:absolute left-24 top-10`}
          >
            Pedram Abdzadeh
          </div>
          <div className='text-2xl text-[#cbc9e2] '>
            SAY HELLO
          </div>
          <div className='text-[#ccf381] flex flex-col text-xl'>
            <Link href={'https://www.linkedin.com/in/pedram-abdzadeh-ziabary/'} color='#ccf381'>
              linkedin.com/in/pedram-abdzadeh-ziabary/
            </Link>
          </div>
          <div className='text-[#ccf381] flex flex-col text-xl cursor-pointer'>
            <Link href={'mailto:pabdzadeh@gmail.com'} target='_blank'>
              pabdzadeh@gmail.com
            </Link>
          </div>
          <div className='text-[#ccf381] flex flex-col text-xl cursor-pointer'>
            https://www.instagram.com/pedram.abdzadeh/
          </div>
          <div className='border-t-2 border-[#ccf381] h-5 w-[70%] absolute bottom-[150px]'>
          </div>
        </section>
        <section>

        </section>
      </main>
    </>

  )
}
