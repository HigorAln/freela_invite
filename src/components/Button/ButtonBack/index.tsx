
import { ButtonHTMLAttributes } from 'react'
import { HiArrowLeft } from 'react-icons/hi'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}

export function ButtonBack({ ...rest }: Props){
  return(
    <button className='p-2 text-gray-500 hover:opacity-80' {...rest}>
      <HiArrowLeft size={20} />
    </button>
  )
}