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

export default {
  postDataRegister,
  postDataLogin,
};
