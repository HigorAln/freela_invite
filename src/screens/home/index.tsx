import { AnimatePresence, motion as m } from 'framer-motion';
import { useEffect, useState } from 'react';
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
  2.5: "33%",
  3: '66%',
  4: "100%",
} as any

function Home() {
  const [register, setRegister] = useState<RegisterProps>({} as RegisterProps);
  const [step, setStep] = useState(1);
  const [searchCep, setSearchCep] = useState("");
  const [isSearchCep, setIsSearchCep] = useState(false);

  function handleBack(){
    if (step === 1) {
      setRegister({} as RegisterProps);
      setStep(1);
      return
    }
    if (isSearchCep){
      setIsSearchCep(false);
      return
    }
    setStep(step - 1);
  }

  function handleNextStep(){
    setStep(step + 1);
  }

  useEffect(() => {
    if (isSearchCep === true){
      document?.getElementById("cep")?.focus();
    }
  }, [isSearchCep])

  useEffect(() => {
    if (searchCep.length > 3){
      // todo
    }
  }, [])
  
  return (
    <div className="bg-[#f8f8f8] w-screen h-[100vh] overflow-hidden flex justify-center items-center">
      <div className="bg-white h-full w-full sm:w-[600px] sm:h-[600px] sm:shadow-md rounded-lg">
        
        <header className="h-14 flex flex-col justify-center gap-2">
          <div className='flex justify-between'>
            {step > 1 ? <ButtonBack className='ml-3' onClick={handleBack}/> : <div className='h-9' />}
            {isSearchCep && (
              <input 
                type="text" 
                id="cep"
                className='flex-1 mx-2 sm:mx-20 p-2 mt-1 focus:outline-none text-lg text-txt-primary' 
                placeholder='Pesquisar' 
                value={searchCep}
                onChange={(e) => setSearchCep(e.target.value)}
              />
            )}
            <div className='w-14'/>
          </div>
          <m.div
            className={`h-[2px] bg-primary`}
            animate={{ width: StepsProps[step] }}
          />
        </header>

        {/* NUMBER */}
        {step === 1 && (
          <AnimatePresence>
            <Step1 register={register} setRegister={setRegister} handleNextStep={handleNextStep} />
          </AnimatePresence>
        )} 
        {/* CEP */}
        {step === 2 && (
          <AnimatePresence>
            <Step2 register={register} setRegister={setRegister} handleNextStep={handleNextStep} setIsSearchCep={setIsSearchCep} isSearchCep={isSearchCep} />
          </AnimatePresence>
        )}
        {/* NAME */}
        {step === 3 && (
          <AnimatePresence>
            <Step3 register={register} setRegister={setRegister} handleNextStep={handleNextStep} />
          </AnimatePresence>
        )}
        {/* COMPLETE */}
        {step === 4 && (
          <AnimatePresence>
            <Step4 /> 
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

export default Home
