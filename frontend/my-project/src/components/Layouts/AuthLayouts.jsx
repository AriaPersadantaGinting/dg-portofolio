/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ColorChangingCursor from "../Elements/Cursor";

const AuthLayouts = (props) => {
  const { title = "default", children, type } = props;

  // Mengatur background image berdasarkan type
  const backgroundImage =
    type === "register"
      ? `url('/src/assets/bg1.jpg')`
      : `url('/src/assets/bg2.jpg')`;

  // Menentukan urutan div berdasarkan type
  const isRegister = type === "register";

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage }}
    >
      <ColorChangingCursor></ColorChangingCursor>
      {/* Overlay untuk meningkatkan kontras */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Konten Utama */}
      <div className="relative z-10 flex min-h-screen">
        {/* Formulir Pendaftaran atau Login */}
        <div
          className={`w-1/2 flex justify-center items-center ${
            isRegister ? "order-1" : "order-2"
          }`}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-black text-3xl text-center font-serif mb-8">
              {title}
            </h1>
            {children}
            <div className="mt-4 text-center">
              {type === "register" ? (
                <>
                  <p className="text-black font-extralight inline-block mr-2">
                    Already have an account?
                  </p>
                  <Link
                    to="/login"
                    className="font-bold text-blue-600 hover:text-blue-800"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <p className="text-black font-extralight inline-block mr-2">
                    Don't have an account?
                  </p>
                  <Link
                    to="/register"
                    className="font-bold text-blue-600 hover:text-blue-800"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Div untuk Image atau elemen lainnya */}
        <div
          className={`w-1/2 flex justify-center items-center ${
            isRegister ? "order-2" : "order-1"
          }`}
        >
          {/* <h1 className="text-white text-4xl font-bold">Image</h1> */}
        </div>
      </div>
    </div>
  );
};
export default AuthLayouts;
