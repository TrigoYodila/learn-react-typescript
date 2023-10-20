import { useEffect, useRef } from "react"


export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!) //si la ref peut être nul 
    //point d'exclation i.e inputRef ne sera jamais null lors de l'affectation

    useEffect(() => {
        inputRef.current?.focus()
    },[])

    return (
      <div>
        <input type="text" name="" id="" ref={inputRef} />
      </div>
    );
}