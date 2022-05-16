import React from "react";
import { Provider } from "react-redux";
import poiSliceReducer from "../poistate";
import { configureStore } from "@reduxjs/toolkit";
import AppNavigator from "../routes/app.navigator";

function Welcome(data) {
  const store1 = configureStore({
    reducer: { loc: poiSliceReducer },
  });
  if (data.dataFromParent.location !== null) {
    global.lat = data.dataFromParent.location.latitude;
    global.lon = data.dataFromParent.location.longitude;
  }
  return (
    <Provider store={store1}>
      <AppNavigator />
    </Provider>
  );
}

export default Welcome;
