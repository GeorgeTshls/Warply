import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPoi } from "../poistate";
import { ScrollView } from "react-navigation";
import { convertDistance, getPreciseDistance } from "geolib";

function List(props) {
  let arr;
  const dispatch = useDispatch();
  const poi = useSelector((state) => state.loc);
  useEffect(() => {
    dispatch(getPoi());
  }, [dispatch]);

  if (poi.status === "success") {
    arr = poi.loc;
    let poiloc = { lat: "", lon: "" };
    let finobj = { address: "", distance: "" };
    let finarr = [];
    let poilat, poilon;
    let temp = 0;

    if (global.lat !== null) {
      let usrloc = {
        lat: parseFloat(global.lat),
        lon: parseFloat(global.lon),
      };

      for (let i = 0; i < arr.length; i++) {
        poilat = parseFloat(arr[i].latitude);
        poilon = parseFloat(arr[i].longitude);
        poiloc = {
          lat: poilat,
          lon: poilon,
        };
        temp = getPreciseDistance(usrloc, poiloc);

        finobj = { address: arr[i].address, distance: temp };
        finarr.push(finobj);
      }

      arr = finarr.sort(compare);

      arr.forEach((element) => {
        element.distance = convertDistance(element.distance, "km").toFixed(2);
      });
    }

    function compare(a, b) {
      if (a.distance < b.distance) return -1;
      if (a.distance > b.distance) return 1;
      return 0;
    }

    if (global.lat == null) {
      arr.sort(function (a, b) {
        var textA = a.address.toUpperCase();
        var textB = b.address.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    }
  }

  return (
    <View style={styles.scv}>
      <View style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
        <Image source={require("../assets/warply_w.png")} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        {arr &&
          arr.map((loc, i) => (
            <View>
              <Text style={styles.listitem} key={loc.id}>
                * {loc.address}
              </Text>
              {!!global.lat && (
                <Text
                  style={{ ...styles.listitem, fontSize: 10, color: "#2ad0bc" }}
                >
                  {loc.distance} KM
                </Text>
              )}
            </View>
          ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  scv: {
    width: "100%",
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#6610f2",
    position: "relative",
    bottom: 0,
  },
  listitem: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    color: "white",
    fontFamily: "Roboto",
  },
});

export default List;
