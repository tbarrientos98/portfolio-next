"use client"
import { createContext, useState } from "react";
// import { LocalStorage } from "../Data/LocalStorage";
export const contexto = createContext();
const { Provider } = contexto;

const Context = (props) => {
    // const [colorTheme, setColorTheme] = LocalStorage("darkMode", "light");
    // console.log(colorTheme);

    // const [darkMode, setDarkMode] = useState(
    //     colorTheme === "light" ? false : true
    // );

    const contextValue = {
        // colorTheme,
        // setColorTheme,
        // darkMode,
        // setDarkMode
    };

    return <Provider value={contextValue}>
        {props.children}
    </Provider>;
};

export default Context;
