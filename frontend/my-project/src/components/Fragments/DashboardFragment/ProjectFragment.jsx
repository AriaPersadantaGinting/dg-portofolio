/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import CreateFormProject from "../Form/CreateFormProject";
import authService from "../../../service/auth-service";
import UpdateFormProject from "../Form/UpdateFormProject";

const ProjectFragment = () => {
  const [projects, setProjects] = useState([]); // Ubah inisialisasi menjadi array kosong
  const [aktifProjectBar, setAktifProjectBar] = useState(false);
  const [aktifUpdateProjectBar, setAktifUpdateProjectBar] = useState(false);

  const handleAktifProjectBar = () => {
    setAktifProjectBar(true);
  };

  const handleCloseProjectbar = () => {
    setAktifProjectBar(false);
  };

  const handleAktifUpdateProjectBar = () => {
    setAktifUpdateProjectBar(true);
  };

  const handleCloseUpdateProjectbar = () => {
    setAktifUpdateProjectBar(false);
  };

  const handleGetProject = async () => {
    try {
      await authService.fetchAllProject((res) => {
        setProjects(res);
      });
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    handleGetProject();
  }, []);

  return (
    <div className="w-2/3 flex flex-col ml-56 mt-4">
      <div className="overflow-x-auto max-h-[28rem] overflow-y-auto mb-8 bg-white pb-8">
        <div className="px-2 py-4">
          <h1 className="text-2xl font-bold font-serif ml-4 text-blue-600">
            Project
          </h1>
        </div>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="sticky">
            <tr className="bg-gray-100 text-gray-600">
              <th className="py-2 px-20">Id</th>
              <th className="py-2 px-20">Title</th>
              <th className="py-2 px-20">Description</th>
              <th className="py-2 px-20">URL</th>
              <th className="py-2 px-20">Start Date</th>
              <th className="py-2 px-20">End Date</th>
              <th className="py-2 px-20">Created At</th>
              <th className="py-2 px-20">Updated At</th>
              <th className="py-2 px-20">Technologies</th>
              <th className="py-2 px-20">Image</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 text-center">
                  <td className="py-2 px-4">{project.id}</td>
                  <td className="py-2 px-4">{project.title}</td>
                  <td className="py-2 px-4">{project.description}</td>
                  <td className="py-2 px-4">
                    <a
                      href={project.url}
                      className="text-blue-500 hover:underline"
                    >
                      {project.url}
                    </a>
                  </td>
                  <td className="py-2 px-4">{project.startDate}</td>
                  <td className="py-2 px-4">{project.endDate}</td>
                  <td className="py-2 px-4">{project.createdAt}</td>
                  <td className="py-2 px-4">{project.updatedAt}</td>
                  <td className="py-2 px-4">
                    {/* {project.technologies.join(", ")} */}
                    Example
                  </td>
                  <td className="py-2 px-4">{project.image}</td>
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
          onClick={handleAktifProjectBar}
        >
          <div className="ml-4">
            <h1 className="text-white text-2xl font-bold">Create Project</h1>
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
          onClick={handleAktifUpdateProjectBar}
        >
          <div className="ml-4">
            <h1 className="text-white text-2xl font-bold">Update Project</h1>
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
      {aktifProjectBar && <CreateFormProject onClose={handleCloseProjectbar} />}
      {aktifUpdateProjectBar && (
        <UpdateFormProject onClose={handleCloseUpdateProjectbar} />
      )}
    </div>
  );
};

export default ProjectFragment;
