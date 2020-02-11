import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';



class Sobre extends Component {
  static navigationOptions = {
    title: 'Sobre',
  };
    render() {
      return (
        <View>
          <Text> TELA Sobre  </Text>
          <Button title="Voltar" onPress={()=> this.props.navigation.goBack()}/>   
          <Text> Texto qualqer  </Text>
          <Button title="Ir pa o Início" onPress={()=> this.props.navigation.popToTop()}/>        
        </View>
      )
    }
  }
  
  export default Sobre;