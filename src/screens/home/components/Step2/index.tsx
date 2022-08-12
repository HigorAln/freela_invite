import { RegisterProps } from "../..";
import { ButtonPrimary } from "../../../../components/Button/ButtonPrimary";

interface Props {
  register: RegisterProps;
  setRegister: (number: RegisterProps) => void;
  handleNextStep: () => void;
}

export function Step2({register, setRegister, handleNextStep}: Props){
  return(
    <main className='flex flex-1 flex-col h-[calc(100vh-56px)] sm:h-full justify-center items-center p-10'>
      <h2 className='mb-5 text-txt-primary text-lg'>Informe o seu CEP!</h2>
      <p className='mb-8 text-center text-gray-500 text-sm'>Esta é uma informação vital para personalizar o conteúdo com base na sua localização.</p>

      <input 
        className='border-[1px] border-[#ddd] px-4 py-3 w-full sm:w-auto rounded-full text-center text-lg text-primary focus:outline-primary'
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

      <button className="mt-2 mb-6 text-primary text-sm">Não sabe seu CEP?</button>

      <ButtonPrimary text='PRÓXIMO' className='mb-10' onClick={handleNextStep}/>
    </main>
  )
}