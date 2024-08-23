import RegisterFormNew from "../components/Fragments/RegisterFormNew";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const Register = () => {
  return (
    <AuthLayouts title="Aria Persadanta Ginting" type="register">
      <RegisterFormNew></RegisterFormNew>
    </AuthLayouts>
  );
};
export default Register;
