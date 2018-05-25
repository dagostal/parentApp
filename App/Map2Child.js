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
  ScrollView,
  Alert,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {StackNavigator,NavigationActions} from 'react-navigation';
import { width, height, totalSize } from 'react-native-dimension';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Map2Child extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
      super(props);
      this.state = {
        visible:false
      }
    }

    markPresent(name) {
      Alert.alert(
      "Mark"+" "+"present",
      "You have marked"+" "+name+" "+"absent today. Would you like to mark your child present?",
      [
        {text: 'Yes', onPress:()=>this.markChildPresent(name)},
        {text: 'Cancel', onPress: () => console.log('cancel')},
      ]
    )
    }
    markChildPresent(name) {
      this.setState({
        visible:true
      },function(){

      fetch('https://stormy-reaches-15993.herokuapp.com/markPresent', {
         method: 'POST',
         headers: {
           "Content-Type": "application/json"
         },
         body:JSON.stringify({
           childName:name,
           parentid:this.props.parentToken
         })
       })
       .then((response) => response.json())
       .then((responseJson) => {
         console.log(responseJson)
         this.setState({
           visible:false
         })
         this.props.updateChildren()
       })
       .catch((err) => {
         Alert.alert(
         "check connection",
         "cannot update student to present,check signal",
         [
           {text: 'Yes', onPress:()=>this.setState({visible:false})}
         ]
       )
       })
     })

    }


      markAbsent(name) {
        Alert.alert(
        "Mark"+"Absent",
        "Would you like to mark"+" "+name+" "+"absent for today?",
        [
          {text: 'Yes', onPress:()=>this.markChildAbsent(name)},
          {text: 'Cancel', onPress: () => console.log('cancel')},
        ]
      )
      }
      markChildAbsent(name) {
        this.setState({
          visible:true
        },function(){
        fetch('https://stormy-reaches-15993.herokuapp.com/markAbsent', {
           method: 'POST',
           headers: {
             "Content-Type": "application/json"
           },
           body:JSON.stringify({
             childName:name,
             parentid:this.props.parentToken
           })
         })
         .then((response) => response.json())
         .then((responseJson) => {
           console.log(responseJson)
            this.props.updateChildren()
            this.setState({
              visible:false
            })
         })
         .catch((err) => {
           Alert.alert(
           "check connection",
           "cannot update student to absent,check signal",
           [
             {text: 'Yes', onPress:()=>this.setState({visible:false})}
           ]
         )
         })
       })
      }


    render() {
      return (
        <View style={{borderRadius: 2,
          borderColor: '#ddd',
          borderBottomWidth: 0,
          backgroundColor:'rgb(247,247,247)',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          marginTop:height(30),
          height:height(80)}}>
        <Spinner visible={this.state.visible} textContent={"Updating..."} textStyle={{color: '#FFF'}} />
        <View style={{height:height(10),flexDirection:'row',backgroundColor:'rgb(247,247,247)'}}>
          <View style={{flex:5}}><View style={{flex:1,margin:width(4),marginLeft:width(6),borderBottomWidth:2,borderColor:'#E1E1E1',justifyContent:'flex-end'}}><Text style={{fontSize:23,fontWeight:'bold',color:"#979797"}}>Attendance</Text></View></View>
          <View style={{flex:1,justifyContent:'flex-end',paddingBottom:height(2)}}><TouchableOpacity onPress={this.props.closePress.bind(this)}><Text style={{fontSize:25,fontWeight:'bold',color:"#4A90E2"}}>X</Text></TouchableOpacity></View>
        </View>
          <View style={{height:height(3),flexDirection:'row',marginTop:height(3),marginLeft:width(7),marginRight:width(7),backgroundColor:'rgb(247,247,247)'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:"#979797"}}>Attendance</Text></View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:"#979797"}}>Child</Text></View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:"#979797"}}>Status</Text></View>
          </View>
          <View style={{borderColor:'#E1E1E1',borderWidth:1,height:height(12),flexDirection:'row',backgroundColor:'white',marginLeft:width(5),marginRight:width(5)}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>{this.props.child1absence?<TouchableOpacity onPress={this.markPresent.bind(this,this.props.child1name)}><Image style={{height:height(10),width:width(15)}} source={require("./RedBox.png")}></Image></TouchableOpacity>:
                <TouchableOpacity  onPress={this.markAbsent.bind(this,this.props.child1name)}><Image style={{height:height(10),width:width(15)}} source={require("./GreenBox.png")}></Image></TouchableOpacity>}
              </View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:"#4A90E2"}}>{this.props.child1name}</Text></View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:"#4A90E2"}}>{this.props.child1status}</Text></View>
          </View>
          <View style={{borderColor:'#E1E1E1',borderWidth:1,height:height(12),flexDirection:'row',backgroundColor:'white',marginLeft:width(5),marginRight:width(5)}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>{this.props.child2absence?<TouchableOpacity  onPress={this.markPresent.bind(this,this.props.child2name)}><Image style={{height:height(10),width:width(15)}} source={require("./RedBox.png")}></Image></TouchableOpacity>:
                <TouchableOpacity onPress={this.markAbsent.bind(this,this.props.child2name)}><Image style={{height:height(10),width:width(15)}} source={require("./GreenBox.png")}></Image></TouchableOpacity>}
              </View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:"#4A90E2"}}>{this.props.child2name}</Text></View>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:"#4A90E2"}}>{this.props.child2status}</Text></View>
          </View>
        </View>
        )
      }
    }
