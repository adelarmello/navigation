import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Home';
import Contato from './src/Contato';
import Sobre from './src/Sobre';

const AppNavigator = createStackNavigator({
  Home:{
    screen: Home
  },
  Contato:{
    screen: Contato
  },
  Sobre:{
    screen: Sobre
  }
}, {
  initialRouteName: 'Home',

  defaultNavigationOptions:{
    headerTintColor: '#ffffff',
    //headerTitle: 'Sujeito ...',
    headerStyle:{
      backgroundColor: '#222222'
    },
    headerBackTitle: null, //Deixa sem o titulo da pagina anterior no header

  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

//npm install react-native-safe-area-context @react-native-community/masked-view