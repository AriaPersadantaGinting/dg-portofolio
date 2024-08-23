/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Label from "./label";
import Input from "./Input";

const InputForm = (props) => {
  const { children, id, name, htmlFor, placeholder } = props;
  return (
    <div className="mb-2 flex flex-col">
      <Label htmlFor={htmlFor} variant="text-white">
        {children}
      </Label>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        variant="border-2 border-white outline-2 outline-blue-600"
      ></Input>
    </div>
  );
};
export default InputForm;
