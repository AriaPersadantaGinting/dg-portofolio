/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Label from "./label";
import Input from "./Input";

const InputForm = (props) => {
  const { children, id, name, htmlFor, placeholder, variant } = props;
  return (
    <div className="mb-2 flex flex-col">
      <Label htmlFor={htmlFor} variant={`text-white ${variant}`}>
        {children}
      </Label>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        variant={`border-2 border-white outline-2 outline-blue-600 ${variant}`}
      ></Input>
    </div>
  );
};
export default InputForm;
