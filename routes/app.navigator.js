import {createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MapList from '../Screens/MapList';
import WelcomeWrapper from "../Screens/WelcomeWrapper";
const screens = {
    Home:{
        screen: WelcomeWrapper
        
    },
    Map:{
        screen: MapList
    }
}
const MapStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerShown: false
    }
});



export default createAppContainer(MapStack);