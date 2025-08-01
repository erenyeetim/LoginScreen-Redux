import { useContext, useState } from "react";
import { Alert } from "react-native";

import { createUser } from "../util/auth";
import AuthContent from "../components/Auth/AuthContent";
import { authenticate } from "../store/userSlice";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useDispatch } from "react-redux";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const dispatch = useDispatch();
  // const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      dispatch(authenticate(token));
    } catch (error) {
      Alert.alert(
        "Authentication Failed!",
        "Could not create user please check your input and try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating user..."} />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
