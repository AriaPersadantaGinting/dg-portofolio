import LoginFormNew from "../components/Fragments/LoginFormNew";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const Login = () => {
  return (
    <AuthLayouts title="Aria Persadanta Ginting" type="login">
      <LoginFormNew></LoginFormNew>
    </AuthLayouts>
  );
};
export default Login;
