import { useState } from "react";
import Input from "./reusable-input";

const FormBuilder=()=>{

const [inputs,setInputs]=useState([]);

const handleAddInput=()=>{
setInputs([...inputs,`Feild ${inputs.length+1}`])
}
const handleSaveTemplate=()=>{
    console.log(inputs)
}

return(<>
<div className="container">
<div className="form-container">
    {inputs.map((inputName,index)=>(
        <Input
        key={index}
        name={`input-${index}`}
        placeholder={`Feild ${index+1}`}
        />
    ))}
</div>
<div className="btn-container">
<button onClick={handleAddInput}>input</button>
<button onClick={handleSaveTemplate} style={{ marginTop: '20px' }}>
        Save Form Template
      </button>
</div>


</div>

</>)
}

export default FormBuilder;
