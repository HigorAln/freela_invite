import { ButtonHTMLAttributes } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export function ButtonPrimary({ text, className, ...rest }: Props){
  return(
    <button 
      className={
        `flex text-md text-white justify-between items-center w-72 py-3 px-6 bg-primary rounded-full hover:opacity-60 transition-opacity 
        ${className} ${rest.disabled ? "cursor-not-allowed" : ""} ${rest.disabled ? "opacity-60" : ""}`}
      {...rest}
      disabled={rest.disabled}
    >
      <span />
      {text}
      <MdArrowForwardIos size={15} />
    </button>
  )
}