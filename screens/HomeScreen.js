import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class HomeScreen extends React.Component {
  constructor(){
    super();
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
    }
  }

  static navigationOptions = {
    header: null,
  };

  _handleSubmitPress = () => {
    const jsonInput = JSON.stringify(this.state.input);
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "https://police.siu.edu/sw/safewalkwriteandemail.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(jsonInput);

    xmlhttp.onreadystatechange = () => {
      if(xmlhttp.readyState == 4){
        if(xmlhttp.responseText === ''){
          console.log('Failed: No Internet Connection');
        }else {
          console.log(xmlhttp.responseText);
        }
      }
    };


    console.log(this.state.input);
  };

  _handleCancelPress = () => {
    console.log(this.state.input);
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://dps.siu.edu/'
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/police.png')
                  : require('../assets/images/police.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Safe Dawg </Text>
            <Text style={styles.getStartedText2}>Provided By</Text>

            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Department of Public Safety</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.getStartedContainer}>
            <Text>Operating Hours</Text>
            <Text>Fall & Sping Semesters</Text>
            <Text>Monday: 8:30pm --- 12:30am</Text>
            <Text>Tuesday: 8:00pm --- 12:00am</Text>
            <Text>Wednesday: 8:00pm --- 12:00am</Text>
            <Text>Thursday: 8:00pm --- 12:00am</Text>
            <Text>Friday: 8:00pm --- 12:00am</Text>
            <Text>Saturday: 5:30pm --- 9:30pm</Text>
            <Text>Sunday: Closed</Text>
          </View>

        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
        <Icon name='warning' size={40} color='red' />
          <Text style={styles.tabBarInfoText}>In Case of An Emegerency Call 911</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 20,
    color: 'black',
    lineHeight: 24,
    textAlign: 'center',
  },

  getStartedText2: {
    fontSize: 13,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 15,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 10,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'red',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
