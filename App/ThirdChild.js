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
import CodeInput from 'react-native-code-input';
import { EventRegister } from 'react-native-event-listeners'



export default class ThirdChild extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      fistName:null,
      lastName:null,
      age:null,
      school:null,
      busCode:null,
      done:false
    };
  }
  nextChild(){
    var data={
      type:"child3",
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      age:this.state.age,
      school:this.state.school,
      busCode:this.state.busCode
    }
      EventRegister.emit('nextChild', data)

  }
  firstName(e) {
    this.setState({
      firstName:e
    })
  }
  lastName(e) {
    this.setState({
      lastName:e
    })
  }
  school(e) {
    this.setState({
      school:e
    })
  }
  age(e) {
    this.setState({
      age:e
    })
  }



  render() {

    return (
    <View style={{flex:1}}>
    <View style={{flex:2,justifyContent:'center',alignItems:'center',marginTop:10}}><Text style={{color:'#8DDA94',fontSize:25,fontWeight:'bold'}}>Third Child</Text></View>
    <View style={{flex:5,marginLeft:20,marginRight:20}}>
      <TextInput onChangeText={this.firstName.bind(this)} placeholderTextColor="green" placeholder="First Name" underlineColorAndroid='transparent' style={{flex:1,borderColor:'green',borderBottomWidth:3,color:"#417505",paddingTop:15}}></TextInput>
      <TextInput onChangeText={this.lastName.bind(this)} placeholderTextColor="green" placeholder="Last Name"  underlineColorAndroid='transparent' style={{flex:1,borderColor:'green',borderBottomWidth:3,color:"#417505",paddingTop:15}}></TextInput>
    </View>
    <View style={{flex:2,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <TextInput keyboardType={"numeric"} onChangeText={this.age.bind(this)} placeholderTextColor="green" placeholder="Age" underlineColorAndroid='transparent' style={{height:50,width:50,borderColor:'green',borderBottomWidth:3,color:"green",textAlign:'center',paddingTop:15}}></TextInput>
    </View>
    <View style={{flex:3,marginLeft:20,marginRight:20}}>
      <TextInput onChangeText={this.school.bind(this)} placeholderTextColor="green" placeholder="School" underlineColorAndroid='transparent' style={{flex:1,borderColor:'green',borderBottomWidth:3,color:"#417505",paddingTop:15}}></TextInput>
    </View>
    <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:20}}>
      <Text style={{fontSize:20,color:"#417505"}}>Bus Code</Text>
    </View>
    <View style={{flex:1,marginBottom:50}}>
    <CodeInput
      ref="codeInputRef1"
      space={10}
      size={30}
      inputPosition='center'
      activeColor='green'
      inactiveColor='green'
      codeInputStyle={{ borderBottomWidth: 1.5,borderColor:"green" }}
      borderType='underline'
      autoFocus={false}
      onFulfill={(isValid, code) => this.setState({done:true,busCode:code})}
    />
            </View>
            <View style={{flex:2,flexDirection:'row'}}>
              <View style={{flex:1}}></View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}></View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center',marginBottom:20}}>{this.state.done&&<TouchableOpacity onPress={this.nextChild.bind(this)}><Image style={{height:40,width:40}} source={require("./arrowright.png")}></Image></TouchableOpacity>}</View>
            </View>
        </View>
    );
  }
}
