import { FC, PropsWithChildren, useReducer } from 'react';
import { UiContext, uiReducer } from './';


export interface UIState {
    isMenuOpen: boolean;
}

interface Props {
    children: JSX.Element;
}

const UI_INITIAL_STATE: UIState = {
    isMenuOpen: false,
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const toggleSideMenu = () => {
        dispatch({ type: '[UI] - ToggleMenu' })
    }

    return (
        <UiContext.Provider value={{
            ...state,

            //mretodos
            toggleSideMenu,
        }} >
            {children}
        </UiContext.Provider>
    )
}
