import { useState } from "react";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { login } from "../util/auth";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { authenticate } from "../store/userSlice";

function LoginScreen() {
  const dispatch = useDispatch();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      dispatch(authenticate(token));
      AsyncStorage.setItem("token", token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Logging you in..."} />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
