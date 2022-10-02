import { createContext } from 'react';

interface ContextProps {
    isMenuOpen: boolean;

    //metodos
    toggleSideMenu: () => void;
}


export const UIContext = createContext({} as ContextProps);