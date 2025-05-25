import { useAuth } from "./AuthContext";

import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";

function AuthForm() {
  const { user } = useAuth();

  return user == null ? <LoginForm /> : <LogoutForm />;
}

export default AuthForm;
