import axios from "axios";

const postDataRegister = async (data) => {
  try {
    const result = await axios.post(
      "http://localhost:3000/api/dg-portofolio/users",
      data
    );
    return result;
  } catch (error) {
    console.info(error);
  }
};

const postDataLogin = async (data, callback) => {
  const result = await axios
    .post("http://localhost:3000/api/dg-portofolio/users/login", data)
    .then((res) => {
      console.info(res.data.data.token);
      callback(true, res.data.data.token);
    })
    .catch((error) => {
      console.info(error);
      callback(false, error);
    });
  return result;
};

const getDataUser = async (callback) => {
  const result = await axios
    .get(" http://localhost:3000/api/dg-portofolio/users/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      callback(res.data.data);
    })
    .catch((error) => {
      console.info(error.data);
      callback(error.data);
    });
  return result;
};

const updateDataUser = async (data) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.patch(
      "http://localhost:3000/api/dg-portofolio/users/current",
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.info(response.data.data);
    return response.data.data; // Mengembalikan data yang diperbarui
  } catch (error) {
    console.error("Update failed:", error);
    throw error; // Lemparkan error jika diperlukan
  }
};

export default {
  postDataRegister,
  postDataLogin,
  getDataUser,
  updateDataUser,
};
