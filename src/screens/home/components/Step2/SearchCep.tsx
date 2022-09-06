import axios from 'axios';
import { motion as m } from 'framer-motion';
import { debounce } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useCep } from '../../../../context/Cep/index';
import { CityMapped, UFMapped } from '../../../../utils/cep';

interface Props {
  handleNextStep: () => void;
}

export function SearchCep({handleNextStep}: Props){
  const { 
    setSearchUF,
    searchUF,
    searchCity,
    searchStreet,
    setIsSearchUF,
    isSearchUF,
    setIsSearchCity,
    isSearchCity,
    setIsSearchStreet,
    isSearchStreet,
    setSearchStreet,
    setSearchCity,
    setUf,
    uf,
    setCity,
    setStreet,
    setCep,
    city,
    setIsSearchCep
  } = useCep();
  const [listUfs, setListUfs] = useState<{label: string; value:string}[]>([]);
  const [listCities, setListCities] = useState<{label: string; value:string}[]>([]);
  const [listStreets, setListStreets] = useState<any>([]);

  const UFs = useRef(UFMapped);
  const Cities = useMemo(() => CityMapped(uf), [uf]);

  const handleSearchStreet = debounce(async () => {
    try {
      const result = await axios.get(`https://viacep.com.br/ws/${uf}/${city}/${searchStreet}/json/`)
      console.log({ result })

      setListStreets(result.data)
    }catch(err){
      console.log(err)
    }
  }, 500);

  useEffect(() => {
    setIsSearchUF(true);
  }, [])

  useEffect(() => {
    console.log("renderisou UFs")
    if(searchUF.length > 0){
      setListUfs(UFs.current.filter((element) => element.label.toLowerCase().includes(searchUF.toLowerCase())));
    }else {
    }
  }, [searchUF])

  useEffect(() => {
    console.log("renderisou city")
    if(searchCity.length > 0){
      setListCities(Cities?.filter((element) => element.label.toLowerCase().includes(searchCity.toLowerCase()))!);
    }else {
    }
  }, [searchCity])

  useEffect(() => {
    if (searchStreet.length > 5) {
      handleSearchStreet();
    }
  }, [searchStreet])
  
  return(
    <m.main 
      className='flex flex-1 flex-col gap-2 h-[calc(100vh-56px)] sm:h-[calc(600px-56px)] max-h-full p-10 px-4 overflow-auto'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y:0 }}
      exit={{ opacity: 0, y: -50 }}
    >
    
    {isSearchUF && listUfs.length === 0 && <m.h1 className='text-txt-primary text-xl text-center'>Digite seu Estado para que possamos filtrar possiveis resultados!</m.h1>}
    {isSearchCity && listCities.length ===0 && <m.h1 className='text-txt-primary text-xl text-center'>Digite o nome da sua cidade!</m.h1>}
    {isSearchStreet && listStreets.length === 0 && <m.h1 className='text-txt-primary text-xl text-center'>Digite o nome da sua rua!</m.h1>}

    {isSearchUF && listUfs?.map(element => (
      <m.span
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        key={element.value} 
        className="flex items-center px-2 h-12 border-b-[1px] active:opacity-40 active:bg-[transparent] border-gray-100 cursor-pointer"
        onClick={() => {
          setUf(element.value)
          setIsSearchUF(false);
          setIsSearchCity(true);
          setListUfs([]);
          setSearchUF("")
        }}
      >
        <h1 className='text-2xl'>{element.label}</h1>
      </m.span>
    ))}

    {isSearchCity && listCities?.map(element => (
      <m.span 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        key={element.value} 
        className="flex items-center px-2 h-12 border-b-[1px] active:opacity-40 active:bg-[transparent] border-gray-100 cursor-pointer"
        onClick={() => {
          setCity(element.value)
          setIsSearchCity(false);
          setListCities([]);
          setSearchCity("")
          // setIsSearchStreet(true)
          handleNextStep();
        }}
      >
        <h1 className='text-2xl'>{element.label}</h1>
      </m.span>
    ))}

    {isSearchStreet && listStreets?.map((element: any) => (
      <>
        {element.logradouro && (
          <m.span 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            key={element?.cep} 
            className="flex items-center px-2 h-12 border-b-[1px] active:opacity-40 active:bg-[transparent] border-gray-100 cursor-pointer"
            onClick={() => {
              setStreet(element)
              setIsSearchCep(false);
              setIsSearchStreet(false);
              setSearchStreet("");
              setListStreets([]);
              handleNextStep();
              setCep(element?.cep)
            }}
          >
            <h1 className='text-2xl'>{element.logradouro}</h1>
          </m.span>
        )}
      </>
    ))}

      {/* <ButtonPrimary text='PRÓXIMO' className='mb-10' onClick={() => handleNextStep()}/> */}
    </m.main>
  )
}