import React from "react";

const TextInput = ({ label, name, type, value, onChange, onBlur, error, touched ,placeholder}) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label htmlFor={name}>{label}</label><br />
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
         className="form-input" 
      />
      {touched && error && <div style={{ color: "red", marginTop: "5px" }}>{error}</div>}
    </div>
  );
};

export default TextInput;