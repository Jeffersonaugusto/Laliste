import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from '../pages/Main'
import Home from '../pages/Home'
import BuyItens from '../pages/BuyItens'
import ListItens from '../pages/ListItens'


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
          screen: ListItens,
        },
    },    
    {
      initialRouteName: 'BuyItens',
    }
  );
  
export default AppContainer = createAppContainer(RootStack);

