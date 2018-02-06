import React from 'react';
import Emoji from './Emoji';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';

const emojiList = [
  {
    name: 'smile',
    label: 'Feliz'
  },
  {
    name: 'confounded',
    label: 'Confuso'
  },
  {
    name: 'angry',
    label: 'Raiva'
  },
  {
    name: 'rage',
    label: 'Furioso'
  },
  {
    name: 'anguished',
    label: 'Frustrado'
  },
  {
    name: 'flushed',
    label: 'Envergonhado'
  },
];

export default class App extends React.Component {
  render() {
    const marginRight = (index, length) => (index + 1) !== length ? 10 : 0;

    return (
      <View style={styles.container}>
        <Text style={styles.question}>
          Como você está se sentindo agora?
        </Text>
        <View style={styles.emojiList}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={
              emojiList.map((emoji, i, list) => ({
                key: emoji.name,
                emoji: <Emoji name={emoji.name} label={emoji.label} style={{
                  marginRight: marginRight(i, list.length)
                }}/>
              }))
            }
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
    backgroundColor: '#1dcaff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    fontSize: 35, 
    textAlign: 'center', 
    color: 'white', 
    fontFamily: 'Roboto', 
    fontWeight: '500', 
    marginBottom: 10
  },
  emojiList: {
    height: 150
  }
});
