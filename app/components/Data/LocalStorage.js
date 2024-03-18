import {useState} from 'react'

export const LocalStorage = (key, valorInicial) => {
    const [valor, setValor] = useState(()=>{
        const item = localStorage.getItem(key)
        try {
            return item ? JSON.parse(item) : valorInicial            
        } catch (error) {
            return valorInicial
        }
    })
    const setValores = (valores) => {
        setValor(valores)
        localStorage.setItem(key, JSON.stringify(valores))
    }
    return [valor, setValores] 
}