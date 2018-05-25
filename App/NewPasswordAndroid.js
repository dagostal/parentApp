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
  Alert,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import OneSignal from 'react-native-onesignal';
import { width, height, totalSize } from 'react-native-dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class NewPasswordAndroid extends Component {
  static navigationOptions = {
    header: null,
  };


  constructor(props) {
    super(props);
    this.state = {
      name: null,
      pass1:null,
      pass2:null,
      deviceId:null
    };
  }

    componentDidMount() {

      AsyncStorage.getItem("deviceID").then((value)=> {
        if(value) {
          this.setState({
            deviceId:value
          })
        } else {
          this.setState({
            deviceId:"no deviceID found"
          })
        }
      })
    }

  pass1(e){
    this.setState({
      pass1:e
    })
  }
  pass2(e){
    this.setState({
      pass2:e
    })
  }


  next() {

    if(this.state.pass1!==this.state.pass2) {
      Alert.alert(
        "New Password",
        "passwords do not match",
        [
          {text: 'Ok', onPress: () => console.log('cancel')}
        ]
      )
      return;
    }
    if(this.state.pass1.length<6) {
      Alert.alert(
        "New Password",
        "password must be greater than 5 characters",
        [
          {text: 'Ok', onPress: () => console.log('cancel')}
        ]
      )
      return;
    }

    fetch('https://stormy-reaches-15993.herokuapp.com/passwordChange', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        parentId:this.props.navigation.state.params.token,
        newPassword:this.state.pass1,
        deviceId:this.state.deviceId
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      var children=responseJson
      var numChilds=responseJson.length
    })
    .catch((err)=>{
      console.log('error',err)
    })
    AsyncStorage.setItem("parentToken",this.props.navigation.state.params.token)
    const { navigate } = this.props.navigation;
    navigate('MapScreen')
  }

  render() {
    return (
      <KeyboardAwareScrollView  style={{ backgroundColor: 'white' }}
      resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false} contentContainerStyle={styles.container}>
      <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'#00a2fe'}}>
      <View style={{flex:1,backgroundColor:'#00a2fe',flexDirection:'row',marginTop:height(5)}}>
      <View style={{backgroundColor:'#00a2fe',flex:1,justifyContent:'center',alignItems:'flex-start',paddingLeft:width(4)}}><Image style={{height:height(35),width:width(10)}} source={require("./Busleft.png")}></Image></View>
      <View style={{flex:1}}></View>
      <View style={{backgroundColor:'red',flex:1,justifyContent:'center',alignItems:'flex-start'}}><Image style={{height:height(35),width:width(30)}} source={require("./Busright.png")}></Image></View></View>
      <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
      <Image style={{height:height(20),width:width(39)}} source={require("./stash.png")}></Image>
      </View>
      <View style={{marginTop:height(5),flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'white',fontSize:20,fontWeight:'bold',fontFamily:'AvenirNext-DemiBold'}}>Before You Start</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'white',textAlign:'center',marginTop:height(5),marginLeft:width(5),marginRight:width(5),fontFamily:'Avenir-Book'}}>The first priority of the BusWays team is security. For that reason we ask you to please choose a new password for your account</Text>
      </View>
      <View style={{flex:1}}></View>
      </View>
      <View style={{flex:1}}>
      <View style={{flex:2}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{fontFamily:'Avenir-Book',color:'#979797'}}>New Password</Text><TextInput onChangeText={this.pass1.bind(this)} underlineColorAndroid={'transparent'} secureTextEntry={true} style={{paddingLeft:width(4),height:height(9),width:width(85),borderColor:'#979797',borderWidth:2,borderRadius:3}}></TextInput></View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{fontFamily:'Avenir-Book',color:'#979797'}}>Re-Type Password</Text><TextInput onChangeText={this.pass2.bind(this)} underlineColorAndroid={'transparent'} secureTextEntry={true} style={{paddingLeft:width(4),height:height(9),width:width(85),borderColor:'#979797',borderWidth:2,borderRadius:3}}></TextInput></View>
      </View>
      <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={this.next.bind(this)}><View style={{borderRadius:3,width:width(90),height:height(10),backgroundColor:'#00a2fe',justifyContent:'center',alignItems:'center'}}><Text style={{fontWeight:"bold",color:'white',fontFamily:'Avenir-Book'}}>Accept</Text></View></TouchableOpacity>
      </View>
      </View>
      </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex:1,
    backgroundColor:'white'
  },

});
