import { RegisterProps } from "../..";
import { ButtonPrimary } from "../../../../components/Button/ButtonPrimary";

interface Props {
  register: RegisterProps;
  setRegister: (number: RegisterProps) => void;
  handleNextStep: () => void;
}

export const Step1 = ({ register, setRegister, handleNextStep}: Props) => {
  return(
    <main className='flex flex-1 flex-col h-[calc(100vh-56px)] sm:h-full justify-center items-center p-10'>
      <h2 className='mb-9 text-txt-primary text-lg'>Você foi convidado por João Pedro</h2>
      <h1 className='mb-4 text-txt-primary marker:text-xl'>Insira seu número</h1>
      <p className='mb-5 text-center w-5/6 text-gray-500 text-sm'>Sendo eleitor ou candidato insira seu número de celular para criação ou login de perfil.</p>

      <input 
        className='border-[1px] border-[#ddd] px-4 py-3 w-full sm:w-auto rounded-full text-center text-lg mb-8 text-primary focus:outline-primary'
        placeholder='+55 (99) 9 99999-9999'
        value={register.number}
        onChange={(e) => {
          const value = e.target.value
            .replace(/\D/g,"")
            .replace(/^(\d)/,"+$1")
            .replace(/(.{3})(\d)/,"$1 ($2")
            .replace(/(.{7})(\d)/,"$1) $2")
            .replace(/(.{14})(\d)/, "$1-$2")

            setRegister({...register, number: value})
        }}
      />  

      <ButtonPrimary text='PRÓXIMO' className='mb-10' onClick={handleNextStep} />
    </main>
  )
}