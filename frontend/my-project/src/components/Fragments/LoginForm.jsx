import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const LoginForm = () => {
  return (
    <div className="">
      <InputForm
        htmlFor="username"
        id="username"
        name="username"
        placeholder="input your username"
      >
        Username
      </InputForm>
      <InputForm
        htmlFor="password"
        id="password"
        name="password"
        placeholder="input your password"
      >
        Password
      </InputForm>
      <Button variant="hover:bg-blue-700 active:bg-blue-800" type="button">
        Sign In
      </Button>
    </div>
  );
};
export default LoginForm;
