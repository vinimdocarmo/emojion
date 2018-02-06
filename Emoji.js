import React from 'react';
import { Text, View, Alert } from 'react-native';
import emoji from 'node-emoji';

function showAlert(title) {
    Alert.alert(
      title,
      null,
      [
        {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

export default class Emoji extends React.Component {
    render() {
        return (
            <View style={{...this.props.style}}>
                <Text style={{fontSize: 75}} onPress={() => showAlert(this.props.name)}>{emoji.get(this.props.name)}</Text>
                <Text style={{fontSize: 15, textAlign: 'center', color: 'white', backgroundColor: 'rgba(234, 242, 255, .2)', borderRadius: 12}}>{this.props.label}</Text>
            </View>
        );
    }
};