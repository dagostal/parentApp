import { AppRegistry,Platform } from 'react-native';
import HomeScreen from "./App/HomeScreen.js";
import HomeScreenAndroid from "./App/HomeScreenAndroid.js";
import MapScreenIOS from "./App/MapScreenIOS.js"
import MapScreenAndroid from "./App/MapScreenAndroid.js"
import PrivacyAfter from "./App/PrivacyAfter.js"
import PrivacyBefore from "./App/PrivacyBefore.js"
import PrivacyBeforeAndroid from "./App/PrivacyBeforeAndroid.js"
import NewPassword from './App/NewPassword.js'
import NewPasswordAndroid from './App/NewPasswordAndroid.js'

import {StackNavigator} from 'react-navigation'




  if(Platform.OS === 'ios'){
    var parentApp3 = StackNavigator({
      Home: { screen: HomeScreen },
      PrivacyAfter:{screen: PrivacyAfter,
        navigationOptions: {
            gesturesEnabled: false,
          }
        },
      PrivacyBefore:{screen: PrivacyBefore,
        navigationOptions: {
            gesturesEnabled: false,
          }
      },
      NewPassword:{screen:NewPassword,
        navigationOptions: {
            gesturesEnabled: false,
          }
      },
      MapScreen: { screen: MapScreenIOS,
        navigationOptions: {
            gesturesEnabled: false,
          }
       }
    });
  } else {
    var parentApp3 = StackNavigator({
      Home: { screen: HomeScreen },
      PrivacyAfter:{screen: PrivacyAfter,
        navigationOptions: {
            gesturesEnabled: false,
          }
        },
      PrivacyBefore:{screen: PrivacyBefore,
        navigationOptions: {
            gesturesEnabled: false,
          }
      },
      NewPassword:{screen:NewPassword,
        navigationOptions: {
            gesturesEnabled: false,
          }
      },
      MapScreen: { screen: MapScreenAndroid,
        navigationOptions: {
            gesturesEnabled: false,
          }
       }
    });
  }




AppRegistry.registerComponent('parentApp3', () => parentApp3);
