/* eslint-disable react/prop-types */
const Button = (props) => {
  const { variant, children = "Login", type, onClick = () => {} } = props;
  return (
    <div className="flex flex-col w-full">
      <button
        className={`bg-blue-600 px-4 py-4 text-white mt-10 rounded-full ${variant}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
