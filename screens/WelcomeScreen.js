import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// import { AuthContext } from "../store/auth-context";
import { useSelector } from "react-redux";

function WelcomeScreen() {
  // const authCtx = useContext(AuthContext);
  // const token = authCtx.token;
  const token = useSelector((state) => state.user.token);

  const [fetchedMessage, setFetchedMessage] = useState("");
  useEffect(() => {
    axios.get("messageUrl" + token).then((response) => {
      setFetchedMessage(response.data);
    });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
