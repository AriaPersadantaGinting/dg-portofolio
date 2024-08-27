/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Input = (props) => {
  const {
    variant,
    id,
    name,
    placeholder = "default",
    type,
    min,
    max,
    step,
  } = props;
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      min={min}
      max={max}
      step={step}
      className={`px-4 py-4 border-2 border-slate-200 m-2 shadow-md focus:shadow-blue-400 mb-4 ${variant} outline-4`}
    ></input>
  );
};
export default Input;
