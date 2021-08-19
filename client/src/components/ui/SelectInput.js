import React from "react";

const SelectInput = (props) => {
  const {
    data: { className, disabled, id, label, name, required, styles, type, options, value },
  } = props;

  const { onChange } = props;
  return (
    <div>
      <label for={id}>{label}</label>

      <select
        className={className}
        disabled={disabled}
        name={name}
        id={id}
        onChange={onChange}
        style={styles}
        required={required}
        value={value}
      >
        {options.map((option) => {
          const { text, value, selected, disabled } = option;
          return (
            <option value={value} selected={selected} disabled={disabled}>
              {text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
