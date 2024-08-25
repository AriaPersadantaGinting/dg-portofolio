import { useEffect, useState } from "react";
import Button from "../../Elements/Button";
import Input from "../../Elements/Input/Input";
import authService from "../../../service/auth-service";

/* eslint-disable react/no-unknown-property */
const UserFragment = () => {
  const [user, setUser] = useState({
    username: "",
    name: "",
    createdAt: "",
    updatedAt: "",
  });
  const handleUser = async () => {
    await authService.getDataUser((res) => {
      try {
        setUser(res);
      } catch (error) {
        setUser(error.res);
      }
    });
  };
  const tanggal = (tanggal) => {
    const date = new Date(tanggal);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };
  const handleUpdateUser = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };
    try {
      await authService.updateDataUser(data);
      window.location.href = "/user";
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  useEffect(() => {
    handleUser();
  }, []);
  return (
    <div className="flex flex-col items-center mt-10 pb-20">
      <div className="mr-[40rem] mb-10">
        <h2 className="text-white text-4xl font-serif font-bold">
          User Portfolio
        </h2>
      </div>
      <div className="w-[60rem] ml-8 flex flex-wrap items-center mb-4">
        <div className="bg-blue-700 mr-10 mb-8 w-[26rem] px-5 py-6 rounded-2xl flex flex-wrap justify-between">
          <div className="flex flex-col ml-4">
            <h2 className="text-slate-200 italic font-bold">Username</h2>
            <p className="text-white font-extralight font-serif text-xl">
              {user.username}
            </p>
          </div>
          <div className="bg-white px-3 py-3 rounded-2xl flex items-center justify-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-user text-blue-800"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
              <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
            </svg>
          </div>
        </div>
        <div className="bg-blue-700 mr-10 mb-8 w-[26rem] px-5 py-6 rounded-2xl flex flex-wrap justify-between">
          <div className="flex flex-col ml-4">
            <h2 className="text-slate-200 italic font-bold">CreatedAt</h2>
            <p className="text-white font-extralight font-serif text-xl">
              {tanggal(user.createdAt)}
            </p>
          </div>
          <div className="bg-white px-3 py-3 rounded-2xl flex items-center justify-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-lock text-blue-800"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3" />
            </svg>
          </div>
        </div>
        <div className="bg-blue-700 mr-10 mb-8 w-[26rem] px-5 py-6 rounded-2xl flex flex-wrap justify-between">
          <div className="flex flex-col ml-4">
            <h2 className="text-slate-200 italic font-bold">Name</h2>
            <p className="text-white font-extralight font-serif text-xl">
              {user.name}
            </p>
          </div>
          <div className="bg-white px-3 py-3 rounded-2xl flex items-center justify-center mr-4">
            <span className="text-blue-700 font-extrabold font-serif">DG</span>
          </div>
        </div>

        <div className="bg-blue-700 mr-10 mb-8 w-[26rem] px-5 py-6 rounded-2xl flex flex-wrap justify-between">
          <div className="flex flex-col ml-4">
            <h2 className="text-slate-200 italic font-bold">UpdatedAt</h2>
            <p className="text-white font-extralight font-serif text-xl">
              {tanggal(user.updatedAt)}
            </p>
          </div>
          <div className="bg-white px-3 py-3 rounded-2xl flex items-center justify-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-due text-blue-700"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M16 3v4" />
              <path d="M8 3v4" />
              <path d="M4 11h16" />
              <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col w-[54rem] mr-14 rounded-xl pb-4">
        <div className="mb-4 ml-2">
          <h3 className="font-bold text-3xl text-blue-600">Update User</h3>
        </div>
        <div>
          <form onSubmit={handleUpdateUser}>
            <Input
              variant="rounded-full w-[53rem] focus:outline-blue-700 focus:outline-4"
              name="username"
              id="username"
              type="text"
              placeholder="update your username..."
            ></Input>
            <Input
              variant="rounded-full w-[53rem] focus:outline-blue-700 focus:outline-4"
              name="password"
              id="password"
              type="password"
              placeholder="update your password..."
            ></Input>
            <Input
              variant="rounded-full w-[53rem] focus:outline-blue-700 focus:outline-4"
              name="name"
              id="name"
              type="text"
              placeholder="update your name..."
            ></Input>
            <Button variant="w-[53rem] ml-2" type="submit">
              Update
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserFragment;
