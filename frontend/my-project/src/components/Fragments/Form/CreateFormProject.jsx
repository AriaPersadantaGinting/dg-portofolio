/* eslint-disable react/prop-types */
import Input from "../../Elements/Input/Input";
import Button from "../../Elements/Button";
import { handleCreateProject } from "../../../service/validasi-service.js";

const CreateFormProject = (props) => {
  const { onClose } = props;
  return (
    <div className="w-full bg-black bg-opacity-50 fixed backdrop-blur-md min-h-screen">
      <div className="flex flex-col w-[30rem] h-[32rem] absolute left-[15%] top-[5%] items-center bg-white rounded-xl  overflow-hidden">
        <div className="overflow-y-auto overflow-x-hidden">
          <div className="absolute right-8 cursor-pointer" onClick={onClose}>
            <span className="font-bold text-2xl">x</span>
          </div>
          <div className="mb-8 mt-4 ml-4">
            <h1 className="text-3xl font-bold font-serif">Create Project</h1>
          </div>
          <div className="w-full ml-2 mb-8">
            <form onSubmit={handleCreateProject}>
              <Input
                htmlFor="title"
                name="title"
                id="title"
                type="text"
                placeholder="Title"
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
              <Input
                htmlFor="url"
                name="url"
                id="url"
                type="text"
                placeholder="Url"
                variant="w-[27rem] rounded-full pl-4 focus:outline-8 focus:outline-blue-700"
              ></Input>
              <Input
                htmlFor="startDate"
                name="startDate"
                id="startDate"
                type="date"
                placeholder="StartDate"
                variant="w-[27rem] rounded-full pl-4 focus:outline-8 focus:outline-blue-700"
              ></Input>
              <Input
                htmlFor="endDate"
                name="endDate"
                id="endDate"
                type="date"
                placeholder="EndDate"
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
export default CreateFormProject;
