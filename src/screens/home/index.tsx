import { AnimatePresence, motion as m } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ButtonBack } from '../../components/Button/ButtonBack/index';
import { useCep } from '../../context/Cep/index';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';

const StepsProps = {
  1: '0px',
  2: '33%',
  2.5: "33%",
  3: '66%',
  4: "100%",
} as any

function Home() {
  const [step, setStep] = useState(1);
  const nameRef = useRef("")
  
  const { 
    cep,
    setCep,
    isSearchCep,
    setIsSearchCep,
    isSearchCity,
    isSearchStreet,
    setIsSearchCity,
    setIsSearchUF,
    setIsSearchStreet,
    isSearchUF,
    searchCity,
    searchStreet, 
    searchUF,
    setSearchCity,
    setSearchStreet,
    setSearchUF,
  } = useCep();
  
  function handleBack(){
    if (isSearchCep){
      if (isSearchUF){
        setIsSearchCep(false);
        return
      }
      if (isSearchCity){
        setIsSearchCity(false)
        setIsSearchUF(true)
        return
      }
      if (isSearchStreet){
        setIsSearchStreet(false)
        setIsSearchCity(true)
        return
      }
    }
    if (step === 1) {
      setStep(1);
      return
    }
    if (isSearchCep){
      setIsSearchCep(false)
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
  }, [isSearchCep, isSearchStreet, isSearchCity, isSearchUF]);

  
  return (
    <div className="bg-[#f8f8f8] w-screen h-[100vh] overflow-hidden flex justify-center items-center">
      <div className="bg-white h-full w-full sm:w-[600px] overflow-auto overflow-x-hidden sm:h-[600px] sm:shadow-md rounded-lg">
        
        <header className="h-14 flex flex-col justify-center gap-2">
          <div className='flex justify-between'>
            {step > 1 ? <ButtonBack className='ml-3' onClick={handleBack}/> : <div className='h-9' />}
            {isSearchCep && (
              <input 
                type="text" 
                id="cep"
                className='flex-1 mx-2 sm:mx-20 p-2 mt-1 focus:outline-none text-lg text-txt-primary' 
                placeholder='Pesquisar' 
                value={
                  isSearchStreet ? searchStreet : isSearchCity ? searchCity : isSearchUF ? searchUF : ""
                }
                onChange={(e) => {
                  if (isSearchStreet){
                    setSearchStreet(e.target.value)
                  }else if (isSearchCity){
                    setSearchCity(e.target.value)
                  }else if (isSearchUF){
                    setSearchUF(e.target.value)
                  }
                }}
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
              <Step1 handleNextStep={handleNextStep} />
            </AnimatePresence>
          )} 

          {/* CEP */}
          {step === 2 && (
            <AnimatePresence>
              <Step2 handleNextStep={handleNextStep} />
            </AnimatePresence>
          )}

          {/* NAME */}
          {step === 3 && (
            <AnimatePresence>
              <Step3 nameRef={nameRef} handleNextStep={handleNextStep} />
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
