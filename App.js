import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.placeInput}
          value={this.state.placeName}
          onChange={this.placeNameChangedHandler}
          placeholder='Cool Place Here...'
          />
          <Button
            style={styles.placeButton}
            title='Add'
          />
        </View>
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
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeInput: {
    width: "75%",
  },
  placeButton: {
    width: "25%",
  }
});
