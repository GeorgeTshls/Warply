import AppNavigator from "./routes/app.navigator";
import Welcome from "./Screens/Welcome";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { LogBox } from "react-native";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  let data = { lon: 0, lat: 0 };

  useEffect(() => {
    LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        alert(
          "Certain features may not work correctly without GPS location active",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setLocation(location.coords);
    })();
  }, []);

  return <Welcome dataFromParent={{ location }} />;
}
