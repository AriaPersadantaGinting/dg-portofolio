/* eslint-disable react/prop-types */
import Input from "../../Elements/Input/Input.jsx";
import Button from "../../Elements/Button/index.jsx";
// import { useState } from "react";
import authService from "../../../service/auth-service.js";

const CreateFormSkill = (props) => {
  const { onClose } = props;
  // const [skills, setSkills] = useState();
  const handleCreateSkill = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      tahun: formData.get("tahun"),
      image: formData.get("image"),
      description: formData.get("description"),
    };
    try {
      await authService.fetchCreateSkill(data);
      window.location.href = "/skill";
    } catch (error) {
      console.info(error.response.data.errors);
    }
  };
  return (
    <div className="w-full bg-black bg-opacity-50 fixed backdrop-blur-md min-h-screen">
      <div className="flex flex-col w-[30rem] h-[32rem] absolute left-[15%] top-[5%] items-center bg-white rounded-xl  overflow-hidden">
        <div className="overflow-y-auto overflow-x-hidden">
          <div className="absolute right-8 cursor-pointer" onClick={onClose}>
            <span className="font-bold text-2xl">x</span>
          </div>
          <div className="mb-8 mt-4 ml-4">
            <h1 className="text-3xl font-bold font-serif">Create Skill</h1>
          </div>
          <div className="w-full ml-2 mb-8">
            <form onSubmit={handleCreateSkill}>
              <Input
                htmlFor="name"
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                variant="w-[27rem] rounded-full pl-4 focus:outline-8 focus:outline-blue-700"
              ></Input>
              <Input
                htmlFor="tahun"
                name="tahun"
                id="tahun"
                type="number"
                placeholder="Tahun"
                min="1980"
                max="2099"
                step="1"
                variant="w-[27rem] rounded-full pl-4 focus:outline-8 focus:outline-blue-700"
              ></Input>
              <Input
                htmlFor="image"
                name="image"
                id="image"
                type="text"
                placeholder="Image"
                variant="w-[27rem] rounded-full pl-4 focus:outline-8 focus:outline-blue-700"
              ></Input>
              <Input
                htmlFor="description"
                name="description"
                id="description"
                type="text"
                placeholder="Description"
                variant="w-[27rem] rounded-full pl-4 focus:outline-8 focus:outline-blue-700"
              ></Input>
              <Button variant="font-bold w-[93%] ml-2" type="submit">
                create
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateFormSkill;
