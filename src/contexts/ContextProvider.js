import React,{createContext,useContext,useState} from 'react';

const StateContext=createContext();

const initialState={
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider=({children})=>{
    // state/logics out context is going to have
    const [activeMenu,setActiveMenu]=useState (true);
    const [isClicked, setisClicked] = useState(initialState);
    const [screenSize, setscreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false)
    
    const setMode=(e)=>{
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode',e.target.value);
    }

    const setColor=(mode)=>{
        setCurrentColor(mode);

        localStorage.setItem('colorMode',mode);

        setThemeSettings(false);
    }

    const handleClick=(clicked)=>{
        //clicked is a string and setisClicked has bool value therefore the use of following syntax
        setisClicked({...initialState,[clicked]: true});
    }

    return (
        <StateContext.Provider 
        value={{
            currentColor, 
            currentMode, 
            activeMenu, 
            screenSize, 
            setscreenSize, 
            handleClick, 
            isClicked, 
            initialState, 
            setisClicked, 
            setActiveMenu, 
            setCurrentColor, 
            setCurrentMode, 
            setMode, 
            setColor, 
            themeSettings, 
            setThemeSettings
        }}>

            {children}         {/* returns the underlying component below the context */}

        </StateContext.Provider>
    )
}

// function that returns the call to used context but we pass which context to use
export const useStateContext=()=>useContext (StateContext);