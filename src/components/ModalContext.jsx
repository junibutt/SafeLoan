import React from "react";
import { useContext,createContext, useState } from "react";

const ModalContext=createContext();

export const ModalProvider=({children})=>{
  const [open,setOpen]=useState(false);
  return(
    <ModalContext.Provider value={{open,setOpen}}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal=()=>useContext(ModalContext);