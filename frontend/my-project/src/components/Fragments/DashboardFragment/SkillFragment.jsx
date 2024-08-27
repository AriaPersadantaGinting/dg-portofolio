/* eslint-disable react-refresh/only-export-components */

import { useEffect, useState } from "react";
import CreateFormSkill from "../Form/CreateFormSkill";
import UpdateFormSkill from "../Form/UpdateFormSkill";
import authService from "../../../service/auth-service";

const SkillFragment = () => {
  const [aktifSkillBar, setAktifSkillBar] = useState(false);
  const [aktifUpdateSkillBar, setAktifUpdateSkillBar] = useState(false);
  const [skills, setSkills] = useState([]);
  const handleAktifSkillBar = () => {
    setAktifSkillBar(true);
  };
  const handleCloseSkillBar = () => {
    setAktifSkillBar(false);
  };
  const handleAktifUpdateSkillBar = () => {
    setAktifUpdateSkillBar(true);
  };
  const handleCloseUpdateSkillBar = () => {
    setAktifUpdateSkillBar(false);
  };
  const handleGetAllSkill = async () => {
    try {
      await authService.fetchAllSkill((res) => {
        setSkills(res);
      });
    } catch (error) {
      console.error("Error fetching Skills:", error);
    }
  };
  useEffect(() => {
    handleGetAllSkill();
  }, []);
  return (
    <div className="w-2/3 flex flex-col ml-56 mt-4">
      <div className="overflow-x-auto max-h-[28rem] overflow-y-auto mb-8 bg-white pb-8">
        <div className="px-2 py-4">
          <h1 className="text-2xl font-bold font-serif ml-4 text-blue-600">
            Skills
          </h1>
        </div>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="sticky">
            <tr className="bg-gray-100 text-gray-600">
              <th className="py-2 px-20">Id</th>
              <th className="py-2 px-20">Name</th>
              <th className="py-2 px-20">Tahun</th>
              <th className="py-2 px-20">Image</th>
              <th className="py-2 px-20">Description</th>
              <th className="py-2 px-20">CreatedAt</th>
              <th className="py-2 px-20">UpdatedAt</th>
            </tr>
          </thead>
          <tbody>
            {skills.length > 0 ? (
              skills.map((skill) => (
                <tr key={skill.id} className="hover:bg-gray-50 text-center">
                  <td className="py-2 px-4">{skill.id}</td>
                  <td className="py-2 px-4">{skill.name}</td>
                  <td className="py-2 px-4">{skill.tahun}</td>
                  <td className="py-2 px-4">{skill.image}</td>
                  <td className="py-2 px-4">{skill.description}</td>
                  <td className="py-2 px-4">{skill.createdAt}</td>
                  <td className="py-2 px-4">{skill.updatedAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  No projects available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap w-full">
        <div
          className="flex flex-wrap justify-between items-center bg-blue-700 w-[26rem] px-2 py-4 rounded-2xl ml-6 cursor-pointer"
          onClick={handleAktifSkillBar}
        >
          <div className="ml-4">
            <h1 className="text-white text-2xl font-bold">Create Skill</h1>
          </div>
          <div className="bg-white px-3 py-3 mr-4 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus text-blue-700"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
            </svg>
          </div>
        </div>
        <div
          className="flex flex-wrap justify-between items-center bg-blue-700 w-[26rem] px-2 py-4 rounded-2xl ml-8 cursor-pointer"
          onClick={handleAktifUpdateSkillBar}
        >
          <div className="ml-4">
            <h1 className="text-white text-2xl font-bold">Update Skill</h1>
          </div>
          <div className="bg-white px-3 py-3 mr-4 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus text-blue-700"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
            </svg>
          </div>
        </div>
      </div>
      {aktifSkillBar && <CreateFormSkill onClose={handleCloseSkillBar} />}
      {aktifUpdateSkillBar && (
        <UpdateFormSkill onClose={handleCloseUpdateSkillBar} />
      )}
    </div>
  );
};

export default SkillFragment;
