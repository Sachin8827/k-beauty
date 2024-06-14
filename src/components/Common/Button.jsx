import React from "react";

function Button({ className, text, onClick, isDisabled, margin }) {
  return (
    <input
      type="submit"
      className={className}
      onClick={onClick}
      disabled={isDisabled}
      style ={{marginLeft : margin+"rem"}}
      value ={text}
    />
      
    
  );
}

export default Button;