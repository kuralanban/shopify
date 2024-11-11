import { useEffect, useState } from "react";
import Input from "./reusable-input";
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Editform from "./edit-form/edit.component";

const FormBuilder = () => {
  const [inputs, setInputs] = useState([]); 
  const [isFormEditable, setEditFormOpen] = useState(false);
  const [editableInput, setEditableInput] = useState(null);

  useEffect(() => {
  }, [inputs]);

  const handleAddInput = () => {
    setInputs([
      ...inputs,
      { id: inputs.length + 1, label: `Field ${inputs.length + 1}`, name: `Field ${inputs.length + 1}`, type: 'text' },
    ]);
  };

  const toggleEditForm = (inputId) => {
    setEditFormOpen(!isFormEditable);
    setEditableInput(inputs.find((input) => input.id === inputId)); 
  };


  const handleInputChange = (updatedField, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === editableInput.id
          ? { ...input, [updatedField]: value } 
          : input
      )
    );
  };

  const handleSaveTemplate = () => {
    console.log("Inputs saved:", inputs);
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          {inputs.length > 0 &&
            inputs.map(({ id, label, name, type }, index) => (
              <div key={id} className="box">
                <div>
                  <label>{label}</label>
                  <Input key={index} name={name} placeholder={`Field ${index + 1}`} type={type} />
                </div>
                <div />
                <FaEdit onClick={() => toggleEditForm(id)} />
                <Editform
                  isOpen={isFormEditable}
                  onClose={toggleEditForm}
                  data={editableInput}
                  onInputChange={handleInputChange} 
                />
              </div>
            ))}
          <div className="btn-container">
            <button onClick={handleAddInput}>Add Input</button>
            <button onClick={handleSaveTemplate} style={{ marginTop: '20px' }}>
              Save Form Template
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormBuilder;
