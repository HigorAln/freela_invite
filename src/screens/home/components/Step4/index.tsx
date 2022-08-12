import { motion as m } from 'framer-motion';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { ButtonPrimary } from '../../../../components/Button/ButtonPrimary';

export const Step4 = () => {
  return(
    <m.main 
      className='flex flex-1 flex-col h-[calc(100vh-56px)] sm:h-full justify-center items-center p-10'
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <div className='p-3 rounded-full bg-[#eee] mb-9'>
        <IoIosCheckmarkCircleOutline size={70} className="text-primary" />
      </div>

      <h1 className='text-xl text-center mb-7'>Cadastro realizado com sucesso!</h1>

      <p className='mb-9 text-lg tracking-wide text-primary'>Baixar Cidadão Digital</p>
      
      <a target={"_blank"} href="https://apps.apple.com/br/app/cidad%C3%A3o-digital/id1373289741">
        <ButtonPrimary text='Baixar' />
      </a>

    </m.main>
  )
}