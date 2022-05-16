import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPoi } from "../poistate";
import { useEffect } from "react";

const Map = () => {
  let arr;
  const dispatch = useDispatch();
  const poi = useSelector((state) => state.loc);
  useEffect(() => {
    dispatch(getPoi());
  }, [dispatch]);

  let poilat, poilon;
  let poiloc = { lat: "", lon: "", id: "" };
  let newarr = [];

  if (poi.status === "success") {
    arr = poi.loc;

    for (let i = 0; i < arr.length; i++) {
      poilat = parseFloat(arr[i].latitude);

      if (arr[i].id == 5039) {
        poilat = 23.8414012;
      } else {
        poilon = parseFloat(arr[i].longitude);
      }
      poiloc = {
        lat: poilat,
        lon: poilon,
        id: arr[i].id,
      };
      newarr.push(poiloc);
    }
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: global.lat,
        longitude: global.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      clusterColor="#6610f2"
    >
      {newarr &&
        newarr.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.lat,
              longitude: marker.lon,
            }}
          />
        ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Map;
