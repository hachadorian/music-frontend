import React from "react";

const InputField = (props) => {
  return (
    <div className="flex flex-col py-2">
      <label>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className="border rounded-2xl bg-zinc-800 py-2 px-3 text-white focus:outline-indigo-600"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
