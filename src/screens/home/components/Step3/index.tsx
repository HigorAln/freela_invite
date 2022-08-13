import { motion as m } from 'framer-motion';
import { useState } from 'react';
import { ButtonPrimary } from "../../../../components/Button/ButtonPrimary";
interface Props {
  nameRef: any;
  handleNextStep: () => void;
}


export function Step3({handleNextStep, nameRef}: Props){
  const [error, setError] = useState(false);
  return(
    <m.main 
      className='flex flex-1 flex-col h-[calc(100vh-56px)] sm:h-[calc(600px-56px)] justify-center items-center p-9'
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <h2 className='mb-3 text-txt-primary text-lg'>Como deseja ser chamado(a)?</h2>
      <p className='mb-10 text-center text-gray-500 text-sm'>Insira abaixo o seu nome ou como gostaria de ser chamado(a). <span className="text-primary">Ex.: Joao Silva</span></p>

      <input 
        className={`border-[1px] ${error ? "border-red" : "border-gray-100"} px-4 py-3 w-full sm:w-auto rounded-full text-center text-lg text-primary focus:outline-primary`}
        type="text"
        onChange={(e) => {
          nameRef.current = e.target.value;
        }}
      />

      <ButtonPrimary text='PRÓXIMO' className='mt-8' onClick={() => {
        if (nameRef.current?.length < 5){
          setError(true);
        }
        nameRef.current?.length > 5 && handleNextStep();
      }}/>

      <p className="text-[10px] mt-5 text-center">Ao prosseguir, você estará concordando com os <span className="underline">Termos de condições de serviço, políticas de privacidade, políticas de copyright e os termos de comunidade.</span></p>
    </m.main>
  )
}