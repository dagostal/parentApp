import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Keyboard,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import OneSignal from 'react-native-onesignal';
import { width, height, totalSize } from 'react-native-dimension';
import Spinner from 'react-native-loading-spinner-overlay';



export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      pass:null,
      deviceId:null,
      visible:false
    };
  }



  login() {
    var data={
      username:this.state.name,
      password:this.state.pass,
      deviceId:this.state.deviceId
    }
    this.setState({
      visible:true
    },function(){

    fetch('https://stormy-reaches-15993.herokuapp.com/parentLogin', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson===false) {
        Alert.alert(
        "Login",
        "Username or Password incorrect. Contact support@busways.net if you cannot login",
        [
          {text: 'Ok', onPress: () => this.setState({visible:false})}
        ]
      )
      return;
      } if(responseJson==="error") {
        Alert.alert(
        "Login",
        "Username or Password incorrect. Contact support@busways.net if you cannot login",
        [
          {text: 'Ok', onPress: () => this.setState({visible:false})}
        ]
      )
      return;
      }
      this.setState({
        visible:false
      },()=>{

      var parentId=responseJson[0]
      var loggedIn=responseJson[1]

      if(loggedIn===false){
      const { navigate } = this.props.navigation;
      Keyboard.dismiss
      navigate('PrivacyBefore',{token:parentId})
      return
    } else {
      const { navigate } = this.props.navigation;
      Keyboard.dismiss
      AsyncStorage.setItem("parentToken",parentId)
      navigate('MapScreen')
    }
          })
    })
    .catch((err) => {
      //console.log(err)
        Alert.alert(
        "Login",
        "Cannot connect to server, check connection.",
        [
          {text: 'Ok', onPress: () => this.setState({visible:false})}
        ]
      )
        return;
    })
  })
  }
  componentWillMount() {
    OneSignal.addEventListener('ids', this.onIds.bind(this));
  }



  componentDidMount() {

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
    AsyncStorage.setItem("deviceID",device.userId)

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


  render() {

    return (
      <View style={styles.container}>
      <Spinner visible={this.state.visible} textContent={"Logging in..."} textStyle={{color: '#FFF'}} />
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Image style={styles.logoStyle} source={require("./busways_logo.png")}></Image>
            </View>
            <View style={{flex:2}}>
              <View style={styles.textInputView}>
                <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}><Text style={{color:'black'}}>Email</Text></View>
                <TextInput onChangeText={this.change_username.bind(this)} underlineColorAndroid='transparent' style={styles.textInput}></TextInput>
              </View>
              <View style={styles.textInputView}>
                <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}><Text style={{marginBottom:5,color:'black'}}>Password</Text></View>
                <TextInput onChangeText={this.change_password.bind(this)} underlineColorAndroid='transparent' secureTextEntry={true} style={styles.textInputPass}></TextInput>
              </View>
              <View style={{display:'flex',alignItems:'center',marginTop:height(5)}}>
                <TouchableOpacity onPress={this.login.bind(this)}>
                  <View style={styles.loginView}>
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
    paddingLeft:width(10),
    marginRight:width(5),
    borderTopColor:'white',
    borderColor:'white',
    borderBottomWidth:1
  },
  textInputPass:{
    flex:3,
    marginRight:width(5),
    borderTopColor:'white',
    borderColor:'white',
    borderBottomWidth:1
  },
  textInputView: {
    display:'flex',
    flexDirection:'row',
    borderBottomWidth:1,
    marginRight:width(5),
    marginLeft:width(5),
    height:height(8)
  },
  logoStyle:{
    height:height(20),
    width:width(82)
  },
  loginView:{
    height:height(8),
    width:width(35),
    borderRadius:40,
    backgroundColor:'#00a2fe',
    alignItems:'center',
    justifyContent:'center'
  }

});
