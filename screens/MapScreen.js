/*
  This is Backup
*/

import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, KeyboardAvoidingView, } from 'react-native';
import { Constants } from 'expo';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { FAB, TextInput  } from 'react-native-paper';
//import { Overlay } from 'react-native-elements'

import Autocomplete from 'react-native-autocomplete-input';
import AutoTags from 'react-native-tag-autocomplete';


const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const CARD_HEIGHT = height / 4.5;
const CARD_WIDTH = CARD_HEIGHT - 40;

const LATITUDE = 37.713772;
const LONGITUDE = -89.223740;
const LATITUDE_DELTA = 0.0182;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapScreen extends React.PureComponent {
  constructor(props) {
   super(props)
   this.state = { 
     isOverLayVisible: true,
     hasMarker: true,
   

     suggestions: [ {location: 'Abbott Hall'}, {location: 'Abe Martin Field'} ],
     tagSelected: [],

     markers: [
      {
        coordinate: {
          latitude: 37.712593,
          longitude: -89.225218,
        },
        title: "Abbott Hall",
        description: "850 Lentz Dr, Carbondale, IL 62901",
        marker_index: 1,
      },

      {
        coordinate: {
          latitude: 37.704412,
          longitude: -89.221004,
        },
        title: "Abe Martin Field",
        description: "Abe Martin Field",
        marker_index: 2,
      },
      ] 
    
    };
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          user_latitude: position.coords.latitude,
          user_longitude: position.coords.longitude,
          user_location_error: null,
        });
      },
      (user_location_error) => this.setState({ user_location_error: user_location_error.message }),
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
    );
  }

  static navigationOptions = {
    header: null,
  };


  render() {
    const hasMarker = this.state.hasMarker;
    return (
      <View style={styles.container}>
       <View style={styles.searchBar} >
         <TextInput 
           placeholder= " where to?" 
           mode= "flat"     
         />
       </View>

      
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region = {{
           latitude: 37.713772, 
           longitude: -89.223740, 
           latitudeDelta: 0.0182,
           longitudeDelta: 0.0421,
        }} >

         {hasMarker ?
           this.state.markers.map((marker, index) => {
              return(
                <Marker key={index} coordinate={marker.coordinate}>
                  <Callout style={styles.card}>
                    <Text>{marker.title}</Text>
                    <Text>{marker.description}</Text>
                  </Callout>
                </Marker>
              );
           }) : null}
      
      </MapView>

    <FAB
      style={styles.fab1}
      large
      icon="input"
      onPress={() => console.log('Pressed')}
  />

    <FAB
      style={styles.fab2}
      large
      icon="add-location"
      onPress={() => console.log('Pressed')}
  />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 0,
  },

  fab1: {           
    backgroundColor: 'red',                                    
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10,
  },

  fab2: {           
    backgroundColor: 'red',                                    
    position: 'absolute',                                          
    bottom: 70,                                                    
    right: 10,
  },

    card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH + 40,
    overflow: "hidden",
  },

  marker_title: {

  },

  marker_address: {

  },

  searchBar: {
    marginTop: 30,
    paddingLeft: 10,
    paddingTop: 20,
    paddingRight: 10,
  },

});