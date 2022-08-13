import { Route, Routes } from "react-router-dom";
import { CepProvider } from './context/Cep/index';
import Home from "./screens/home";



export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={
        <CepProvider>
          <Home />
        </CepProvider>
      }/>
    </Routes>
  )
}