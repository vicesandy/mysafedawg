import React, { Component } from 'react';
import { Text, Button, StatusBar, Picker, TextInput, KeyboardAvoidingView, View, StyleSheet, AsyncStorage  } from 'react-native';
import { Constants } from 'expo';


export default class CancelPage extends React.Component {
  constructor(props){
  	super(props);
  	this._getData();
  	this.state = {
  		userName: 'Sam test',
      userDawgTag: '850049845',
      userEmail: 'jchen@dps.siu.edu',
      userPhoneNumber: '6184538659',
      startLocation: 'Building 1',
      endLocation: 'Building 2',
      startTime: 'Today',
  	};
  }

  componentWillMount(){
  	this._getData();
  }


  _getData = async() => {
  	try {
  	  const userName = await AsyncStorage.getItem('@SafeDawgStore:userName');
      const userDawgTag = await AsyncStorage.getItem('@SafeDawgStore:userDawgTag');
      const phoneNumber = await AsyncStorage.getItem('@SafeDawgStore:phoneNumber');
      const userEmail = await AsyncStorage.getItem('@SafeDawgStore:userEmail');
      const startLocation = await AsyncStorage.getItem('@SafeDawgStore:startLocation');
      const endLocation = await AsyncStorage.getItem('@SafeDawgStore:endLocation');
      const startTime = await AsyncStorage.getItem('@SafeDawgStore:startTime');
     
  	  if(userName !== null){
  	  	this.setState({userName})
  	  }
      if(userDawgTag!== null){
        this.setState({userDawgTag})
      }
      if(startLocation !== null){
        this.setState({startLocation})
      }
      if(endLocation !== null){
        this.setState({endLocation})
      }
      if(startTime !== null){
        this.setState({startTime})
      }
      if(phoneNumber !== null){
        this.setState({phoneNumber})
      }
      console.log(this.state);
  	}catch(e) {
  	  console.error('Failed to get data');
  	}

  };


  _submitData = async() => {
      if(this.state.userName === null){
        console.log('Must Enter')
      }
      if(this.state.userDawgTag === null){
        console.log('Must Enter')
      }
      if(this.state.userPhoneNumber === null){
        console.log('Must Enter')
      }
      if(this.state.userEmail === null){
        console.log('Must Enter')
      }
      if(this.state.startLocation === null){
        console.log('Must Enter')
      }
      if(this.state.endLocation === null){
        console.log('Must Enter')
      }
      if(this.state.startTime === null){
        console.log('Must Enter')
      }
     try{
        await AsyncStorage.setItem('@SafeDawgStore:userName', this.state.userName);
        await AsyncStorage.setItem('@SafeDawgStore:userDawgTag', this.state.userDawgTag);
        await AsyncStorage.setItem('@SafeDawgStore:phoneNumber', this.state.userPhoneNumber);
        await AsyncStorage.setItem('@SafeDawgStore:userEmail', this.state.userEmail);
        await AsyncStorage.setItem('@SafeDawgStore:startLocation', this.state.startLocation);
        await AsyncStorage.setItem('@SafeDawgStore:endLocation', this.state.endLocation);
        await AsyncStorage.setItem('@SafeDawgStore:startTime', this.state.startTime);
     }catch(e){
       console.log(e);
     }
  };

  render(){
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.description}>
               In order to request an escort from Department of Public Safety, The user must fill out the form completely and submit it to request a walk escort
          </Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.form}>
          <View>
          <TextInput
            style={styles.input}
            value={this.state.userName}
            onChangeText={userName => this.setState({userName})}
            placeholder="Enter Full Name"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="send"
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
          <TextInput
            style={styles.input}
            value={this.state.userDawgTag}
            onChangeText={userDawgTag => this.setState({userDawgTag})}
            placeholder="Enter DawgTag (Numbers Only)"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="send"
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
          <TextInput
            style={styles.input}
            value={this.state.userEmail}
            onChangeText={userEmail => this.setState({userEmail})}
            placeholder="Enter SIU Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="send"
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
          <TextInput
            style={styles.input}
            value={this.state.userPhoneNumber}
            onChangeText={userPhoneNumber => this.setState({userPhoneNumber})}
            ref={ref => {this._emailInput = ref}}
            placeholder="Enter Mobile Phone Number"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="send"
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />

          <View style={styles.picker}>
           <Text>Test</Text>
           <Text>Test2</Text>
         </View>

         </View>
          <View>
            <Button title="Submit" onPress={this._submitData} />
            <Text style={styles.legal}>
             
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    paddingTop: 10,
    padding: 10,
    backgroundColor: '#336699',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  input: {
    margin: 5,
    marginBottom: 0,
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  legal: {
    margin: 10,
    color: '#333',
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 20, 
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  picker: {
    flexDirection: 'row',
    marginTop: 10,
  },
});