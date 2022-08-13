import axios from 'axios';
import { motion as m } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RegisterProps } from "../..";
import { ButtonPrimary } from "../../../../components/Button/ButtonPrimary";

interface Props {
  register: RegisterProps;
  setRegister: (number: RegisterProps) => void;
  handleNextStep: (number?: number) => void;
  setIsSearchCep: (searchCep: boolean) => void;
  isSearchCep: boolean;
}

export function Step2({register, setRegister, handleNextStep, setIsSearchCep, isSearchCep}: Props){
  const [cepIsValid, setCepIsValid] = useState<boolean | null>(null);
  useEffect(() => {
    return () => {
      setIsSearchCep(false);
    }
  }, [])

  useEffect(() => {
    if (register?.cep?.length === 9){
      (async () => {
        const result = await axios.get(`https://viacep.com.br/ws/${register.cep.replace("-", "")}/json/`);

        if (result.data.erro){
          setCepIsValid(false);
          return
        }

        setCepIsValid(true);
      })()
    }else {
    }
  }, [register?.cep])

  return(
    <>
      {!isSearchCep ? (
        <m.main 
          className='flex flex-1 flex-col h-[calc(100vh-56px)] sm:h-full justify-center items-center p-10'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <h2 className='mb-5 text-txt-primary text-lg'>Informe o seu CEP!</h2>
          <p className='mb-8 text-center text-gray-500 text-sm'>Esta é uma informação vital para personalizar o conteúdo com base na sua localização.</p>

          <input 
            className={`border-[1px] ${cepIsValid === true ? "border-primary" : cepIsValid === false ? 'border-red' : "border-[#ddd]"} px-4 py-3 w-full sm:w-auto rounded-full text-center text-lg text-primary focus:outline-none`}
            placeholder='5555-555'
            value={register?.cep}
            type={register?.cep?.length === 9 ? "text" : "number"}
            max={9}
            maxLength={9}
            onChange={(e) => {
              if (e.target.value.length === 9) {
                setRegister(register)
                return
              }
              const value = e.target.value
              .replace(/\D/g, "")
              .replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
              
              setRegister({...register, cep: value})
            }}
          />

          <button className="mt-2 mb-6 text-primary text-sm" 
            onClick={() => {
              setIsSearchCep(true);
            }}
          >
            Não sabe seu CEP?
          </button>

          <ButtonPrimary disabled={cepIsValid !== true} text='PRÓXIMO' className='mb-10' onClick={() => handleNextStep()}/>
        </m.main>
      ) : (
        <>
          <m.main 
            className='flex flex-1 flex-col h-[calc(100vh-56px)] sm:h-full items-center p-10'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
           
           <m.h1 className='text-txt-primary text-xl text-center'>Digite sua localizacao para que possamos encontrar seu cep!</m.h1>

            {/* <ButtonPrimary text='PRÓXIMO' className='mb-10' onClick={() => handleNextStep()}/> */}
          </m.main>
        </>
      )}
    </>
  )
}