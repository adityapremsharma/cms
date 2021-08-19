import React from "react";

const TextInput = (props) => {
  const {
    data: {
      autoComplete,
      autoFocus,
      className,
      disabled,
      id,
      label,
      maxLength,
      minLength,
      name,
      pattern,
      placeholder,
      required,
      styles,
      type,
      validations,
      value,
    },
  } = props;

  const { onChange } = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={className}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        style={styles}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
