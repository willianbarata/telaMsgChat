import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList, ImageBackground} from 'react-native';

import MsgItem from './src/MsgItem';

export default class telaChat extends Component{

  constructor(props){
    super(props);
        
      this.state = {
        chat: [
          {key: '1', nome: 'Willian', msg:' Oiiii', m: true},
          {key: '2', nome: 'Maria', msg:' Oiiii', m: false},
          {key: '3', nome: 'Willian', msg:' Tudo bem ?', m: true},
          {key: '4', nome: 'Maria', msg:' Tudo sim e com você?', m: false},
          {key: '5', nome: 'Willian', msg:' Também..', m: true},
          {key: '6', nome: 'Maria', msg:' Está chovendo na sua cidade ', m: false},
          {key: '7', nome: 'Willian', msg:' Hoje o tempo está nublado, mais acho que vai chover mais tarde e aí?', m: true},
          {key: '8', nome: 'Maria', msg:' Aqui está muito sol', m: false},
          {key: '9', nome: 'Willian', msg:' Entendi !', m: true},
        ]
      };
    }
   

  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source={require('./assets/images/bg.jpg')} style={styles.chat}>
          <FlatList 
              data={this.state.chat}
              renderItem={({item})=> <MsgItem data={item} />}
          />
        </ImageBackground>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS =='ios' ? 20 : 0)
  },
  chat: {
    flex: 1
  }
});
