import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';



class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };
    render() {
      return (
        <View>
          <Text> TELA HOME  </Text>
          <Button title="Ir para Contato" onPress={()=> this.props.navigation.navigate('Contato', { idade: 30})}/>        
        </View>
      )
    }
  }
  
  export default Home;