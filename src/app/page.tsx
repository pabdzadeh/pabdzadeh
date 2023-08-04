import Tag from '@/components/tag'
import { CSSIcon, HTMLIcon, JSIcon, NextIcon, ReactIcon, TSIcon } from '@/icons'

export default function Home() {
  return (
    <>
      <main className="flex min-h-[80vh] flex-col items-center p-24 gap-4">
        <div className='text-[55px] text-center w-[50%] font-bold' style={{ fontFamily: 'Source Code Pro' }}>
          Hello, I’m
          <br />
          Pedram Abdzadeh Ziabari
        </div>
        <div className='w-[50%] text-[#898989] text-2xl font-bold text-justify' style={{ fontFamily: 'SF Pro' }}>
          I am a Front-End Engineer at DFreight, where I develop user-centered interfaces for cutting-edge technology products.
          I work with a talented team to implement visually appealing and intuitive designs that enhance user experience.
          I am passionate about using technology to implement beautiful and functional designs that solve real-world problems.
          I have M.S. degree in Network Science and Techonlogy from University of Tehran, thesis on Deepfake detection using
          Deep Learning especially Transformers. So you can tell I am a ML enthusiast.
        </div>
        <div className='flex gap-4'>
          <Tag>
            <HTMLIcon />
            HTML
          </Tag>
          <Tag>
            <CSSIcon />
            CSS
          </Tag>
          <Tag>
            <JSIcon />
            JS
          </Tag>
          <Tag>
            <TSIcon />
            TS
          </Tag>
          <Tag>
            <ReactIcon />
            React
          </Tag>
          <Tag>
            <NextIcon />
            Next
          </Tag>
          <Tag>
            Angular
          </Tag>
          <Tag>
            Python
          </Tag>
        </div>
      </main>
    </>

  )
}
