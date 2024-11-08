import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dynamic = () => {
    const {id} = useParams();
    const navigate=useNavigate();
    const [newId,setNewId]=useState('');

    useEffect(()=>{
    console.log(id);
    },[id])

    const idChanger=()=>{
    navigate(`/dynamic/${newId}`)
    }
    const [formValue,setFormvalue]=useState({
        username:"",
        email:""
    })
    const validatedForm=()=>{
    }
    const [errors,setErros]=useState({
        username:"",
        email:""
    })
    const handleChange=(event)=>{
    const {name,value}=event.target;
    setFormvalue({
        ...formValue,
        [name]:value
    });
    if (errors[name]) {
        setErros({
          ...errors,
          [name]: "", 
        });
      }
    }
    const validate=()=>{
        const errorMessage={};
        if(!formValue.username){
           errorMessage.username="Username is required";
        }
        if(!formValue.email){
            errorMessage.email="Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(formValue.email)){
            errorMessage.email="Email is invalid";
        }
        setErros(errorMessage);
        return Object.keys(errorMessage).length===0;
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(validate()){
            console.log(formValue);
        }
        else{
            alert("Error in form")
        }
    }
    return (
        <>
{/* <input
onChange={(e)=>{setNewId(e.target.value)}}
type="text"
value={newId}
/>
<button
onClick={idChanger}
>Change ID</button> */}

<input
onChange={handleChange}
name="username"
type="text"
value={formValue.username}
/>
{errors.username && <span>{errors.username}</span>}
<input
onChange={handleChange}
name="email"
type="text"
value={formValue.email}
/>
{errors.email && <span>{errors.email}</span>}
<button
onClick={handleSubmit}
>Submit </button>
        </>)
}
export default Dynamic;