import styles from './Theme.module.css'
import { useContext, useState } from 'react';
import {contexto} from '../../Context/Context';

export default function Theme() {
    const {colorTheme, setColorTheme, darkMode, setDarkMode} = useContext(contexto)
    console.log(colorTheme);
    const handleSwitch = () => {
        if (colorTheme === 'light') {
            setColorTheme('dark')
            setDarkMode(true)
        } else {
            setColorTheme('light')
            setDarkMode(false)
        }
        // setLocalStorage(darkMode)
        // console.log("darkmode",darkMode);
    }
    return (
        <label className={`${styles.switch} mx-3`}>
            <input type="checkbox" onChange={handleSwitch} checked={darkMode} />
            <span className={styles.slider}></span>
        </label>
    )
}