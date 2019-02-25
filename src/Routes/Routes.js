import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from '../pages/Main'
import Home from '../pages/Home'


const RootStack = createStackNavigator(
    {
        Main: {
          screen: Main,
        },
        Home: {
          screen: Home,
        },
    },    
    {
      initialRouteName: 'Main',
    }
  );
  
export default AppContainer = createAppContainer(RootStack);

