import { ReactComponentElement } from "react"

interface Props {
  children: React.ReactNode;
}

const Tag = ({ children }: Props) => {
  return (
    <div className="bg-[#E3E8ED] h-[40px] p-2 rounded-md justify-center flex items-center gap-1 font-bold"
      style={{ fontFamily: 'Source Code Pro' }}
    >
      {children}
    </div>
  )
}

export default Tag;