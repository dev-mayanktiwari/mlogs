import React from "react";

interface InputBoxProps {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  value?: string; 
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputBox: React.FC<InputBoxProps> = ({
  type,
  id,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4 font-myFont">
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value} 
        onChange={onChange}
        className="w-full px-4 py-2 rounded-md bg-muted dark:bg-muted-foreground text-muted-foreground dark:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
