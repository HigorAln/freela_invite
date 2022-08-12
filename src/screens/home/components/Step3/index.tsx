import { motion as m } from 'framer-motion';
import { RegisterProps } from "../..";
import { ButtonPrimary } from "../../../../components/Button/ButtonPrimary";
interface Props {
  register: RegisterProps;
  setRegister: (number: RegisterProps) => void;
  handleNextStep: () => void;
}


export function Step3({handleNextStep, register, setRegister}: Props){
  return(
    <m.main 
      className='flex flex-1 flex-col h-[calc(100vh-56px)] sm:h-full justify-center items-center p-9'
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <h2 className='mb-3 text-txt-primary text-lg'>Como deseja ser chamado(a)?</h2>
      <p className='mb-10 text-center text-gray-500 text-sm'>Insira abaixo o seu nome ou como gostaria de ser chamado(a). <span className="text-primary">Ex.: Joao Silva</span></p>

      <input 
        className='border-[1px] border-[#ddd] px-4 py-3 w-full sm:w-auto rounded-full text-center text-lg text-primary focus:outline-primary'
        value={register?.name}
        type="text"
        onChange={(e) => {
          setRegister({...register, name: e.target.value})
        }}
      />

      <ButtonPrimary text='PRÓXIMO' className='mt-8' onClick={handleNextStep}/>

      <p className="text-[10px] mt-5 text-center">Ao prosseguir, você estará concordando com os <span className="underline">Termos de condições de serviço, políticas de privacidade, políticas de copyright e os termos de comunidade.</span></p>
    </m.main>
  )
}