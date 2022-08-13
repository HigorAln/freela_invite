import { createContext, useContext, useState } from "react";

interface CepProviderProps {
  children: React.ReactNode;
}

interface CepContextProps {
  cep: string;
  setCep: (cep: string) => void;
  uf: string;
  setUf: (uf: string) => void;
  city: string;
  setCity: (city: string) => void;
  searchUF: string;
  setSearchUF: (searchUF: string) => void;
  searchCity: string;
  setSearchCity: (searchCity: string) => void;
  searchStreet: string;
  setSearchStreet: (searchStreet: string) => void;
  isSearchCep: boolean;
  setIsSearchCep: (isSearchCep: boolean) => void;
  isSearchUF: boolean;
  setIsSearchUF: (isSearchUF: boolean) => void;
  isSearchCity: boolean;
  setIsSearchCity: (isSearchCity: boolean) => void;
  isSearchStreet: boolean;
  setIsSearchStreet: (isSearchStreet: boolean) => void;
  street: string;
  setStreet: (street: string) => void;
}


const CepContext = createContext({} as CepContextProps);


export function CepProvider({children}: CepProviderProps){
  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");
  const [searchUF, setSearchUF] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchStreet, setSearchStreet] = useState("");
  const [isSearchCep, setIsSearchCep] = useState(false);
  const [isSearchUF, setIsSearchUF] = useState(false);
  const [isSearchCity, setIsSearchCity] = useState(false);
  const [isSearchStreet, setIsSearchStreet] = useState(false);
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  return(
    <CepContext.Provider value={{
      cep,
      setCep,
      uf,
      setUf,
      searchUF,
      setSearchUF,  
      searchCity,
      setSearchCity,
      searchStreet,
      setSearchStreet,
      isSearchCep,
      setIsSearchCep,
      isSearchUF,
      setIsSearchUF,
      isSearchCity,
      setIsSearchCity,
      isSearchStreet,
      setIsSearchStreet,
      city,
      setCity,
      street,
      setStreet,
    }}>
      {children}
    </CepContext.Provider>
  )
}

export const useCep = () => useContext(CepContext);