import React, { useState, useEffect } from 'react';
import './edit.component.css'; // Add your styles
import Input from '../reusable-input';

const Editform = ({ isOpen, onClose, data, onInputChange }) => {
  const { id, label, type, name } = data || {};
  const availableTypes = ["text", "number", "file", "password", "date"];

  const [selectedType, setSelectedType] = useState(type || "");
  const [inputName, setInputName] = useState(name || "");
  const [inputLabel, setInputLabel] = useState(label || "");


  useEffect(() => {
    setSelectedType(type || "");
    setInputName(name || "");
    setInputLabel(label || "");
  }, [type, name, label]);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedType(value); 
    onInputChange('type', value); 
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setInputName(value); 
    onInputChange('name', value); 
  };

  const handleLabelChange = (event) => {
    const value = event.target.value;
    setInputLabel(value);
    onInputChange('label', value); 
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times; {/* Close icon */}
        </button>
        <div>
          <label>Name</label>
          <input value={inputName} onChange={handleNameChange} />
        </div>
        <div>
          <label>Label</label>
          <input value={inputLabel} onChange={handleLabelChange} />
        </div>
        <div>
          <label>Type</label>
          <div>
            {availableTypes.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name="type"
                  value={option}
                  checked={selectedType === option} 
                  onChange={handleRadioChange} 
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editform;
