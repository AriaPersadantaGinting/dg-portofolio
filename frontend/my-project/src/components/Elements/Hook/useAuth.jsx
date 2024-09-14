import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login"); // Ganti '/login' dengan route halaman login Anda
  }, [navigate]);
};

export default UseAuth;
