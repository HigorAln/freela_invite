import { ButtonHTMLAttributes } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export function ButtonPrimary({ text, className, ...rest }: Props){
  return(
    <button className={`flex text-md text-white justify-between items-center w-72 py-3 px-6 bg-primary rounded-full hover:opacity-80 transition-opacity ${className}`} {...rest}>
      <span />
      {text}
      <MdArrowForwardIos size={15} />
    </button>
  )
}