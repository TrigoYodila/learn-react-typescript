import React from "react"

type InputProps = {
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) => void //gestionnnaire d'evt en tant que props
}


export const Input = (props:InputProps) => {

    //gestionnaire d'evt en tant que fn
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return (
      //<input type="text" value={props.value} onChange={props.handleChange} />
      <input type="text" value={props.value} onChange={handleInputChange} />
    );
}