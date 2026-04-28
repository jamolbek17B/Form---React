import { useState, type ChangeEvent, type FormEvent } from "react"


const Form=()=>{
    // const  [firstname,setFirstname]=useState("")
    // const  [lastname,setLastname]=useState("")

        const [formValues,setFormValues]=useState({
            firstname:"",
            lastname:""
        })


    // const  handleFirstname=(event:ChangeEvent<HTMLInputElement>)=>{
    //     setFirstname(event.target.value)
    // }
    // const  handleLastname=(event:ChangeEvent<HTMLInputElement>)=>{
    //     setLastname(event.target.value)
    // }

        const handleFormChange=(event:ChangeEvent<HTMLInputElement>)=>{
            setFormValues({...formValues,[event.target.name]:event.target.value})
        }

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(formValues.firstname,formValues.lastname);
        
        console.log(
            "Form jo'natildi"
        );
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="firstname" 
            placeholder="Firstname..."
            value={formValues.firstname}
            onChange={handleFormChange}
            />
            <br />
            <input 
            type="text" 
            name="lastname" 
            placeholder="Lastname..." 
            value={formValues.lastname}
            onChange={handleFormChange}
            />
            <p>Name: {formValues.firstname} <br /> Lastname: {formValues.lastname}</p>
            <button type="submit">Yuborish</button>            
        </form>
    )
}

export default Form