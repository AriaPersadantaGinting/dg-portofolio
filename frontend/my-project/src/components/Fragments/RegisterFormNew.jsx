import Input from "../Elements/Input/Input";
import Button from "../Elements/Button";
import authService from "../../service/auth-service";
import { useState } from "react";
import validasiError from "../../service/validasi-service.js";

const RegisterFormNew = () => {
  const [errors, setErrors] = useState("");
  // Mengirimkan data ke server
  const handleRegister = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };
    const errors = validasiError(data);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      try {
        await authService.postDataRegister(data);
        window.location.href = "/login";
      } catch (error) {
        console.error("Registration failed:", error);
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <Input
        id="name"
        name="name"
        placeholder="Name"
        type="text"
        variant="rounded-full w-full outline-2 outline-blue-400"
      ></Input>
      <Input
        id="username"
        name="username"
        placeholder="Username"
        type="text"
        variant="rounded-full w-full outline-2 outline-blue-400"
      ></Input>
      <Input
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        variant="rounded-full w-full outline-2 outline-blue-400"
      ></Input>
      <Button variant="hover:bg-blue-700 active:bg-blue-800" type="submit">
        Sign In
      </Button>
      {Object.keys(errors).map((key) => (
        <p key={key} className="text-red-500 text-center">
          {errors[key]}
        </p>
      ))}
    </form>
  );
};
export default RegisterFormNew;
