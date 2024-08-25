import Input from "../Elements/Input/Input";
import Button from "../Elements/Button";
import authService from "../../service/auth-service";
import { useState } from "react";

const LoginFormNew = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    await authService.postDataLogin(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/user";
      } else {
        setLoginFailed(res.response.data.errors);
        console.info(res.response.data.errors);
      }
    });
  };
  return (
    <form onSubmit={handleLogin}>
      <Input
        id="username"
        name="username"
        placeholder="Username"
        type="text"
        variant={`rounded-full w-full outline-2 ${
          loginFailed
            ? "border-red-500 outline-red-500"
            : "border-slate-300 outline-red-300"
        } focus:ring-blue-400}`}
      ></Input>
      <Input
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        variant={`rounded-full w-full outline-2 ${
          loginFailed
            ? "border-red-500 outline-red-500"
            : "border-slate-300 outline-red-300"
        } focus:ring-blue-400}`}
      ></Input>
      <Button variant="hover:bg-blue-700 active:bg-blue-800" type="submit">
        Sign In
      </Button>
      {loginFailed && <p className="text-red-500 text-center">{loginFailed}</p>}
    </form>
  );
};
export default LoginFormNew;
