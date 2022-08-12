import { ButtonHTMLAttributes } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function ButtonPrimary({ text, ...rest }: Props){
  return(
    <button className='flex text-white justify-between items-center w-72 py-3 px-6 bg-[#00BCAF] rounded-full hover:opacity-80 transition-opacity' {...rest}>
      <span />
      {text}
      <MdArrowForwardIos size={15} />
    </button>
  )
}