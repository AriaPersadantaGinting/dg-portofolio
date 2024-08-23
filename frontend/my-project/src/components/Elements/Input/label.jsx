/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Label = (props) => {
  const { children = "default", variant, name, htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className={`font-bold m-2 ${variant}`}>
      {children}
    </label>
  );
};
export default Label;
