
import { ButtonHTMLAttributes } from 'react';
import { HiArrowLeft } from 'react-icons/hi';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function ButtonBack({ className, ...rest }: Props){
  return(
    <button className={`p-2 w-10 text-gray-500 hover:opacity-80 ${className}`} {...rest}>
      <HiArrowLeft size={20} />
    </button>
  )
}