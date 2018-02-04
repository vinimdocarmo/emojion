import React from 'react';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';

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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>Como você está se sentindo agora?</Text>
        <View style={{height: 80}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={[
              {
                key: 'feliz',
                emoji: <Text style={{fontSize: 70}} onPress={() => showAlert('feliz')}>😄</Text>
              },
              {
                key: 'triste',
                emoji: <Text style={{fontSize: 70}} onPress={() => showAlert('triste')}>😢</Text>
              },
              {
                key: 'chorando',
                emoji: <Text style={{fontSize: 70}} onPress={() => showAlert('chorando')}>😭</Text>
              },
              {
                key: 'animado',
                emoji: <Text style={{fontSize: 70}} onPress={() => showAlert('animado')}>🤩</Text>
              },
              {
                key: 'raiva',
                emoji: <Text style={{fontSize: 70}} onPress={() => showAlert('raiva')}>😡</Text>
              },
              {
                key: 'muita raiva',
                emoji: <Text style={{fontSize: 70}} onPress={() => showAlert('muita raiva')}>🤬</Text>
              },
              {
                key: 'sono',
                emoji: <Text style={{fontSize: 70}} onPress={() => showAlert('sono')}>😴</Text>
              }
            ]}
            horizontal={true}
            renderItem={({item}) => item.emoji}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
