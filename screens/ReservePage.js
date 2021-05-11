import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage, ScrollView, KeyboardAvoidingView, StatusBar } from 'react-native';
import { Searchbar, Button, TextInput} from 'react-native-paper';
import { Input } from 'react-native-elements';

export default class ReservePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: {
        'Name': 'Junchao Chen Test',
        'Dawg': '850049845',
        'Email': 'jchen@dps.siu.edu',
        'Phone number': '6184538659',
        'Date': '3/6/2019',
        'Time': '20:00',
        'Start': 'Start',
        'End': 'End',
      }
    };
  }



  async _getData(value){
    try {
      const value = await AsyncStorage.getItem('@SafeDawgStore:userName', value);
    }catch(error){
      console.log('Error get data' + error);
    }
  }



  render(){
    return (
      <View>
      
      <View>
        <StatusBar barStyle='light-content' />
        <Text>All information are required</Text>
      </View>

      <KeyboardAvoidingView behavior='padding' enabled>  
        <TextInput 
          label='Enter Full Name'
          onChangeText={(userName) => this.setState({userName})}
          value={this.state.userName}
        />

        <TextInput 
          label='Enter Dawg Tag'
          onChangeText={(userDawgTag) => this.setState({userDawgTag})}
          value={this.state.userDawgTag}
        />

        <TextInput 
          label='Enter User Phone Number'
          onChangeText={(userPhoneNumber) => this.setState({userPhoneNumber})}
          value={this.state.userPhoneNumber}
        />

        <TextInput 
          label='Enter Start Location'
          onChangeText={(startLocation) => this.setState({startLocation})}
          value={this.state.startLocation}
        />

        <TextInput 
          label='Enter End Location'
          onChangeText={(endLocation) => this.setState({endLocation})}
          value={this.state.endLocation}
        />

        <TextInput 
          label='Enter Start Time'
          onChangeText={(startTime) => this.setState({startTime})}
          value={this.state.startTime}
        />

        </KeyboardAvoidingView>
      </View>
    )
  }
}