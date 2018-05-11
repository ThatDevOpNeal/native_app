import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    placeName: '',
    places: []
  };
};

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState((prevState) => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          placeholder='Cool Place Here...'
          />
          <Button
            style={styles.placeButton}
            title='Add'
            onPress={this.placeSubmitHandler}
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
