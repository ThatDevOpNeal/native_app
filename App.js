import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    placeName: ''
  };
};

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 300 }}
          value={this.state.placeName}
          onChange={this.placeNameChangedHandler}
          placeholder='Cool Place Here...'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
