import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';



class Contato extends Component {
    static navigationOptions = ({navigation}) => {
      return {
        title: navigation.getParam('nome', 'Contatos')
      }
    }
  

    render() {
      const {nome, idade} = this.props.navigation.state.params;
      return (
        <View>
          <Text> TELA Contato </Text>
          <Button title="Voltar" onPress={()=> this.props.navigation.goBack()}/>        
          <Text> Nome: {nome}</Text>
          <Text> Idade:{idade}</Text>
          <Button title="Ir para o Sobre" onPress={()=> this.props.navigation.navigate('Sobre')}/>        
        </View>
      )
    }
  }
  
  export default Contato;