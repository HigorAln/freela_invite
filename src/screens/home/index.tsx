import { motion as m } from 'framer-motion';
import { useState } from 'react';
import { ButtonBack } from '../../components/Button/ButtonBack/index';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';

export interface RegisterProps {
  number: string;
  cep: string;
  name: string;
}

const StepsProps = {
  1: '0px',
  2: '33%',
  3: '66%',
  4: "100%",
} as any

function Home() {
  const [register, setRegister] = useState<RegisterProps>({} as RegisterProps);
  const [step, setStep] = useState(1);

  function handleBack(){
    if (step === 1) {
      setRegister({} as RegisterProps);
      setStep(1);
      return
    }
    setStep(step - 1);
  }

  function handleNextStep(){
    setStep(step + 1);
  }
  
  return (
    <div className="bg-[#f8f8f8] w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="bg-white h-full w-full sm:w-[600px] sm:h-[600px] sm:shadow-md rounded-lg">
        
        <header className="h-14 flex flex-col justify-center gap-2">
          {step > 1 ? <ButtonBack className='ml-3' onClick={handleBack}/> : <div className='h-9' />}
          <m.div
            className={`h-[2px] bg-primary`}
            animate={{ width: StepsProps[step] }}
          />
        </header>

        {step === 1 && <Step1 register={register} setRegister={setRegister} handleNextStep={handleNextStep} />} 
        {step === 2 && <Step2 register={register} setRegister={setRegister} handleNextStep={handleNextStep} />}
        {step === 3 && <Step3 register={register} setRegister={setRegister} handleNextStep={handleNextStep} />}
        {step === 4 && <Step4 />}
      </div>
    </div>
  )
}

export default Home
