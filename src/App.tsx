import { useState } from 'react';
import { ButtonBack } from './components/Button/ButtonBack/index';
import { ButtonPrimary } from './components/Button/ButtonPrimary';

function App() {
  const [number, setNumber] = useState("");
  return (
    <div className="bg-[#f8f8f8] w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="bg-[#fff] h-full w-full sm:border-2 sm:w-[600px] sm:h-[600px] sm:shadow-md rounded-lg">
        
        <header className="h-14 flex justify-center flex-col gap-2">
          <ButtonBack className='ml-3'/>
          <div className='w-3/12 h-[2px] bg-[#00BCAF]'/>
        </header>

        <main className='flex flex-1 flex-col h-[calc(100vh-56px)] justify-center items-center p-10'>
          <h2 className='mb-9 text-primary text-lg'>Você foi convidado por João Pedro</h2>
          <h1 className='mb-4 text-primary text-xl'>Insira seu número</h1>
          <p className='mb-5 text-center w-5/6 text-gray-500 text-sm'>Sendo eleitor ou candidato insira seu número de celular para criação ou login de perfil.</p>

          <input 
            className='border-[1px] border-[#ddd] px-4 py-3 w-full sm:w-auto rounded-full text-center text-lg mb-8 text-[#00BCAF] focus:outline-[#00BCAF]'
            placeholder='+55 (99) 9 99999-9999'
            value={number}
            onChange={(e) => {
              const value = e.target.value
                .replace(/\D/g,"")
                .replace(/^(\d)/,"+$1")
                .replace(/(.{3})(\d)/,"$1 ($2")
                .replace(/(.{7})(\d)/,"$1) $2")
                .replace(/(.{14})(\d)/, "$1-$2")

              setNumber(value)
            }}
          />  

          <ButtonPrimary text='PRÓXIMO'/>
        </main>
      </div>
    </div>
  )
}

export default App
