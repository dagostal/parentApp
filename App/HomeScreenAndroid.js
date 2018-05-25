import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Keyboard,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import OneSignal from 'react-native-onesignal';
import { width, height, totalSize } from 'react-native-dimension';


export default class HomeScreenAndroid extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      pass:null,
      latitude:"null",
      longitude:"null",
      deviceId:null
    };
  }


  _handleNextPress() {
    const { navigate } = this.props.navigation;
    navigate('MapScreen')
  }

  login() {
    var data={
      username:this.state.name,
      password:this.state.pass,
      deviceId:this.state.deviceId
    }
    fetch('https://stormy-reaches-15993.herokuapp.com/parentLogin', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson)
      if(responseJson===false) {
        //console.log('error signing in:',responseJson)
        alert("username or password incorrect")
        return;
      } if(responseJson==="error") {
        alert("cannot connect to internet")
        return;
      }
      //console.log("parent found, login sucessfull!")
      AsyncStorage.setItem("parentToken",responseJson)
      const { navigate } = this.props.navigation;
      Keyboard.dismiss
      navigate('MapScreen')
    })
    .catch((err) => {
      //console.log(err)
      alert("error logging in, check wifi connection")
    })
  }
  componentWillMount() {
    OneSignal.addEventListener('ids', this.onIds.bind(this));
  }



  componentDidMount() {

    //AsyncStorage.setItem("driverToken", "hello world");
    AsyncStorage.getItem("parentToken").then((value)=> {
      if(value) {
        const { navigate } = this.props.navigation;
        Keyboard.dismiss
        navigate('MapScreen')
      }
    })
  }

  componentWillUnmount() {
    // OneSignal.removeEventListener('received', this.onReceived);
    // OneSignal.removeEventListener('opened', this.onOpened);
    // OneSignal.removeEventListener('registered', this.onRegistered);
    OneSignal.removeEventListener('ids', this.onIds);
  }


  onIds(device) {
    console.log('Device info: ', device)
    this.setState({
      deviceId:device.userId
    })

  }

  change_username(e) {
    this.setState({
      name:e
    })
  }
  change_password(e) {
    this.setState({
      pass:e
    })
  }
  createAccount() {
    const { navigate } = this.props.navigation;
    navigate('Create')
  }

  render() {

    return (
      <View style={styles.container}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Image style={styles.logoStyle} source={require("./busways_logo.png")}></Image>
            </View>
            <View style={{flex:2,marginTop:40}}>
              <View style={styles.textInputView}>
                <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}><Text style={{color:'black'}}>Email</Text></View>
                <TextInput onChangeText={this.change_username.bind(this)} underlineColorAndroid='transparent' style={styles.textInput}></TextInput>
              </View>
              <View style={styles.textInputView}>
                <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}><Text style={{marginBottom:5,color:'black'}}>Password</Text></View>
                <TextInput onChangeText={this.change_password.bind(this)} underlineColorAndroid='transparent' secureTextEntry={true} style={styles.textInputPass}></TextInput>
              </View>
              <View style={{display:'flex',alignItems:'center',marginTop:20}}>
                <TouchableOpacity onPress={this.login.bind(this)}>
                  <View style={{height:50,width:100,borderRadius:40,backgroundColor:'#57B0E3',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'white'}}>Login</Text>
                  </View>
                  </TouchableOpacity>
              </View>
            </View>
        </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex:1,
    backgroundColor:'#FFFFFF'
  },
  textInput:{
    flex:5,
    paddingLeft:35,
    marginRight:10,
    borderTopColor:'white',
    borderColor:'white',
    borderBottomWidth:1
  },
  textInputPass:{
    flex:3,
    marginRight:10,
    borderTopColor:'white',
    borderColor:'white',
    borderBottomWidth:1
  },
  textInputView: {
    display:'flex',
    flexDirection:'row',
    borderBottomWidth:1,
    marginRight:15,
    marginLeft:25,
    height:50
  },
  logoStyle:{
    height:150,
    width:300
  }

});
