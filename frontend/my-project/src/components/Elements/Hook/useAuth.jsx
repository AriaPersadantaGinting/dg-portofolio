import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Ganti '/login' dengan route halaman login Anda
    }
  }, [navigate]);
};

export default UseAuth;
