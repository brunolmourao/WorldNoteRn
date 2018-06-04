//import RNGooglePlaces from 'react-native-google-places';
import React from 'react'
import {StyleSheet,View,TouchableOpacity} from 'react-native'
export default class PlacePicker extends React.Component {
    openSearchModal() {
      //RNGooglePlaces.openAutocompleteModal()
      //.then((place) => {
        //  console.log(place);
          // place represents user's selection from the
          // suggestions and it is a simplified Google Place object.
      //})
      //.catch(error => console.log(error.message));  // error is a Javascript Error object
    }
  
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openSearchModal()}
          >
            <Text>Pick a Place</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }