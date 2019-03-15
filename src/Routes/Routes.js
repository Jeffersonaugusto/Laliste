import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from '../pages/Main'
import Home from '../pages/Home'
import BuyItens from '../pages/BuyItens'
import Section from '../pages/Section'


const RootStack = createStackNavigator(
    {
        Main: {
          screen: Main,
        },
        Home: {
          screen: Home,
        },
        BuyItens:{
          screen: BuyItens,
        },
        ListItens:{
          screen: Section,
        },
    },    
    {
      initialRouteName: 'Main',
    }
  );
  
export default AppContainer = createAppContainer(RootStack);

