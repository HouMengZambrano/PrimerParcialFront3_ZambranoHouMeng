import { useState } from "react";
import Card from "./Card";

const Form = ()=>{
        const [name, setName] = useState("")
        const [heroe,setHeroe] = useState("")
        const [error, setError] = useState("")
        const [popUp, setPopUp] = useState(false)

        const onChangeName = (e)=>{
            setName(e.target.value)
        }
        const onChangeHeroe = (e)=>{
            setHeroe(e.target.value)
        }

       const validateName = ()=>{
            return (name.trim()).length >3
       }
       const validateHeroe = ()=>{
            return (heroe.trim()).length >= 6
       }
       
       const onSubmitForm = (e)=>{
        e.preventDefault()
        const certifiedName = validateName()
        const certifiedHeroe = validateHeroe()

        if(!certifiedName || !certifiedHeroe){
            setError("Por favor chequea que la informacion sea correcta")
            setPopUp(false)
        }else{
           setPopUp(true)
           setError("")
        }
        }      
        return (
            <>
            <div>
                <h2>Elije un Heroe</h2>
                <form onSubmit={onSubmitForm}>
                    <input type ="text" placeholder="Ingrese tu Nombre" value ={name} onChange ={onChangeName}></input>
                    <input type ="text" placeholder="Ingrese tu superheroe" value ={heroe} onChange ={onChangeHeroe}></input>
                    <button type="submit">Enviar</button>
                </form>
                {error ? <span>{error}</span>: null}
            </div>
                {popUp ? <Card name={name} heroe={heroe}> </Card>: null}
            </>
        )
}
export default Form;