import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  Button,
  Image,
  Keyboard,
  Alert,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import OneSignal from 'react-native-onesignal';
import timer from 'react-native-timer';
import Modal from 'react-native-modal';
import {StackNavigator,NavigationActions} from 'react-navigation';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import { width, height, totalSize } from 'react-native-dimension';



export default class MapScreenIOS extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
      super(props);
      this.state = {
        child1:null,
        child2:null,
        child1absent:null,
        child2absent:null,
        child1status:null,
        child2status:null,
        child1trueStatus:null,
        child2trueStatus:null,
        reloadState:false,
        children:[],
        loaded:false,
        latitude:42.3387962,
        longitude: -71.1688257,
        markerLat:42.3387962,
        markerLong:-71.1688257,
        status:[],
        parentToken:null,
        show:false,
        isModalVisible: false,
        attendance:false,
        settings:false,
        animatedCord: new MapView.AnimatedRegion({
            latitude: null,
            longitude: null,
          }),
        region: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          }
      };
  }

  // drag(newLat,newLong) {
  //   console.log('DRAGGING')
  //   this.setState({
  //     markerLat:this.state.markerLat+.001,
  //     markerLong:this.state.markerLong+.001
  //   })
  //   this.map.animateToCoordinate({latitude:this.state.markerLat,longitude:this.state.markerLong},1)
  // }






    logout() {
             AsyncStorage.removeItem("parentToken")
      const backAction = NavigationActions.back({
         key: null
             })
              this.props.navigation.dispatch(backAction)
    }
  getLocation() {
    console.log('updating bus location...')
    fetch('https://stormy-reaches-15993.herokuapp.com/getLocation', {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body:JSON.stringify({
         id:this.state.parentToken
       })
     })
     .then((response) => response.json())
     .then((responseJson) => {
       if(responseJson[2]===false) {
         AsyncStorage.removeItem("parentToken")
  const backAction = NavigationActions.back({
     key: null
         })
          this.props.navigation.dispatch(backAction)
         return;
       }
       if(responseJson[0]!=this.state.markerLat||responseJson[1]!=this.state.markerLong) {
         this.setState({
           markerLat:responseJson[0],
           markerLong:responseJson[1]
         })
         // this.map.animateToCoordinate({latitude:this.state.markerLat,longitude:this.state.markerLong},1)
         this.state.animatedCord.timing({
           latitude:this.state.markerLat,
           longitude: this.state.markerLong,
           duration: 1000,
         }).start()
       }

     })
     .catch((err) => {
       console.log(err)
     })
     fetch('https://stormy-reaches-15993.herokuapp.com/getParentChildren', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          parentId:this.state.parentToken
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        var child1status=null
        var child1absent=false
        var child1trueStatus=null
        var child1name=responseJson[0].firstName
        if(responseJson[0].onBus===true) {
           child1status="On Bus"
        } else {
          child1status="Off Bus"
        }
        if(responseJson[0].absent) {
          child1status="Absent"
          child1absent=true
        }
        if(responseJson[0].onBus) {
          child1trueStatus="On Bus"
        } else {
          child1trueStatus="Off Bus"
        }

        var child2=false
        var child2absent=false
        var child2status=null
        var child2trueStatus=null

        if(responseJson[1]) {
          child2=responseJson[1].firstName
          if(responseJson[1].onBus===true) {
             child2status="On Bus"
          } else {
            child2status="Off Bus"
          }
          if(responseJson[1].absent) {
            child2status="Absent"
            child2absent=true
          }
          if(responseJson[1].onBus) {
            child2trueStatus="On Bus"
          } else {
           child2trueStatus="Off Bus"
          }
        }
        this.setState({
          children:responseJson,
          child1:child1name,
          child1absent:child1absent,
          child1status:child1status,
          child2:child2,
          child2absent:child2absent,
          child2status:child2status,
          child1trueStatus:child1trueStatus,
          child2trueStatus:child2trueStatus
        })
      })
      .catch((err) => {
        console.log(err)
      })

  }



  onReceived() {
    console.log("Hit")
  }

  componentWillUnmount() {
    console.log('unmounting..')
     timer.clearInterval("here");
     OneSignal.removeEventListener('received', this.onReceived);
   }

  componentDidMount() {
    console.log('here')
    timer.setInterval("here",this.getLocation.bind(this), 7000)
   dismissKeyboard()
   OneSignal.addEventListener('received', this.onReceived);

     AsyncStorage.getItem("parentToken").then((value)=> {
       this.setState({
         parentToken:value
       })
         fetch('https://stormy-reaches-15993.herokuapp.com/getLocation', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify({
              id:this.state.parentToken
            })
          })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson)
            this.setState({
              markerLat:responseJson[0],
              markerLong:responseJson[1],
              region:{
                latitude:responseJson[0],
                longitude:responseJson[1],
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              },
              animatedCord: new MapView.AnimatedRegion({
                  latitude: responseJson[0],
                  longitude: responseJson[1],
                }),
              loaded:true
            })
          })
          .catch((err) => {
            console.log(err)
          })
        fetch('https://stormy-reaches-15993.herokuapp.com/getParentChildren', {
           method: 'POST',
           headers: {
             "Content-Type": "application/json"
           },
           body:JSON.stringify({
             parentId:value
           })
         })
         .then((response) => response.json())
         .then((responseJson) => {
           var child1status=null
           var child1absent=false
           var child1trueStatus=null
           var child1name=responseJson[0].firstName
           if(responseJson[0].onBus===true) {
              child1status="On Bus"
           } else {
             child1status="Off Bus"
           }
           if(responseJson[0].absent) {
             child1status="Absent"
             child1absent=true
           }
           if(responseJson[0].onBus) {
             child1trueStatus="On Bus"
           } else {
             child1trueStatus="Off Bus"
           }

           var child2=false
           var child2absent=false
           var child2status=null
           var child2trueStatus=null

           if(responseJson[1]) {
             child2=responseJson[1].firstName
             if(responseJson[1].onBus===true) {
                child2status="On Bus"
             } else {
               child2status="Off Bus"
             }
             if(responseJson[1].absent) {
               child2status="Absent"
               child2absent=true
             }
             if(responseJson[1].onBus) {
               child2trueStatus="On Bus"
             } else {
              child2trueStatus="Off Bus"
             }
           }
           this.setState({
             children:responseJson,
             child1:child1name,
             child1absent:child1absent,
             child1status:child1status,
             child2:child2,
             child2absent:child2absent,
             child2status:child2status,
             child1trueStatus:child1trueStatus,
             child2trueStatus:child2trueStatus
           })
         })
         .catch((err) => {
           console.log(err)
         })
     })
    }
  //


  //
  //   onOpened(openResult) {
  //     console.log('Message: ', openResult.notification.payload.body);
  //     console.log('Data: ', openResult.notification.payload.additionalData);
  //     console.log('isActive: ', openResult.notification.isAppInFocus);
  //     console.log('openResult: ', openResult);
  //   }
  //
  markChildAbsent(name) {
    fetch('https://stormy-reaches-15993.herokuapp.com/markAbsent', {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body:JSON.stringify({
         childName:name,
         parentid:this.state.parentToken
       })
     })
     .then((response) => response.json())
     .then((responseJson) => {
       console.log(responseJson)
       if(name===this.state.child1) {
       this.setState({
         child1absent:!this.state.child1absent,
         child1status:"Absent"
       })
     }
     if(name===this.state.child2) {
       this.setState({
         child2absent:!this.state.child2absent,
         child2status:"Absent"
       })
     }
     })
     .catch((err) => {
        alert("error updating child to absent")
     })
  }


  markAbsent(name) {
    console.log('hit')
    Alert.alert(
    "Mark"+"Absent",
    "Would you like to mark"+" "+name+" "+"absent for today?",
    [
      {text: 'Yes', onPress:()=>this.markChildAbsent(name)},
      {text: 'Cancel', onPress: () => console.log('cancel')},
    ]
  )
  }


  contact() {
    Alert.alert(
    "Contact BusWays",
    "support@buways.net",
    [
      {text: 'Ok', onPress: () => console.log('cancel')}
    ]
  )

  }


  markChildPresent(name) {
    fetch('https://stormy-reaches-15993.herokuapp.com/markPresent', {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body:JSON.stringify({
         childName:name,
         parentid:this.state.parentToken
       })
     })
     .then((response) => response.json())
     .then((responseJson) => {
       console.log(responseJson)
       if(name===this.state.child1) {
       this.setState({
         child1absent:!this.state.child1absent,
         child1status:this.state.child1trueStatus
       })
     }
     if(name===this.state.child2) {
       this.setState({
         child2absent:!this.state.child2absent,
         child2status:this.state.child2trueStatus
       })
     }
     })
     .catch((err) => {
        alert("error updating child to absent")
     })

  }

    markPresent(name) {
      console.log('hit')
      Alert.alert(
      "Mark"+" "+"present",
      "You have marked"+" "+name+" "+"absent today. Would you like to mark your child present?",
      [
        {text: 'Yes', onPress:()=>this.markChildPresent(name)},
        {text: 'Cancel', onPress: () => console.log('cancel')},
      ]
    )
    }


    regionChange(e) {
        this.setState({
          region: {
            latitude: e.latitude,
            longitude: e.longitude,
            latitudeDelta: e.latitudeDelta,
            longitudeDelta: e.longitudeDelta,
            }
        })
      }

      show() {
        this.setState({
          show:!this.state.show
        })
      }
      _showModalAttendance = () => this.setState({ isModalVisible: true,attendance:true })
      _showModalSettings= () => this.setState({ isModalVisible: true,settings:true })


  _hideModal = () => this.setState({ isModalVisible: false,attendance:false,settings:false})


  render() {
    var children=this.state.children
    var childrenRender=[]
    var statusRender=[]
    var attenanceRender=[]
    var markAbsentRender=[]

    children.forEach((child)=>{
      var status
      var absent
      if(child.onBus===true) {
        status="on the bus"
      } else {
        status="off the bus"
      }
      if(child.absent===false) {
        absent=<TouchableOpacity onPress={this.markAbsent.bind(this,child.firstName)}><Image source={require("./GreenBox.png")}></Image></TouchableOpacity>
      } else {
        absent=<TouchableOpacity onPress={this.markPresent.bind(this,child.firstName)}><Image source={require("./RedBox.png")}></Image></TouchableOpacity>
      }
          childrenRender.push(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{child.firstName}</Text></View>)
          statusRender.push(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{status}</Text></View>)
          attenanceRender.push(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>{absent}</View>)
          markAbsentRender.push(<View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'blue',marginTop:10,marginBottom:10,borderRadius:25}}><Text> Mark Absent</Text></View>)
        })


    return (
      <View style={{flex:1}}>
      {(!this.state.loaded)&&<Image style={{width: 130, height: 45}} source={require("./busways.png")}></Image>}
      {(this.state.loaded)&&<View style={{flex:1}}>
                <View style={{flex:3}}>
                  <MapView
                  onRegionChange={this.regionChange.bind(this)}
                  style={styles.map}
                  initialRegion={this.state.region}
                  ref={map => this.map = map}
              >
              <MapView.Marker.Animated
                ref={marker => this.marker = marker}
            coordinate={this.state.animatedCord}
            anchor={{x: 0.5, y: 1}}
            centerOffset={{x: 0.5, y: 1}}
            >

            <Image source={require("./maptracker3.png")} style={{height: 85,width: 60}} />
            </MapView.Marker.Animated>


          </MapView>
              <View style={styles.busWaysLogoStyle}><Image style={{width: 130, height: 50}} source={require("./busways.png")}></Image><TouchableOpacity onPress={this.show.bind(this)}><Image style={styles.menuStyle} source={require("./menu.png")}></Image></TouchableOpacity></View>
              <View style={{alignItems:'flex-end',paddingRight:10,marginLeft:300}}></View>
               {(this.state.show)&&<View style={{marginLeft:300,alignItems:'flex-end',paddingRight:10}}><TouchableOpacity onPress={this._showModalAttendance.bind(this)}><Image style={styles.buttonStyle} source={require("./Attendance.png")}></Image></TouchableOpacity></View>}
            {(this.state.show)&&<View style={{marginLeft:300,alignItems:'flex-end',paddingRight:10}}><TouchableOpacity onPress={this._showModalSettings.bind(this)}><Image style={styles.buttonStyle} source={require("./Settings.png")}></Image></TouchableOpacity></View>}
            <View style={[styles.centerView1,this.state.show&&styles.centerView2]}><TouchableOpacity onPress={()=>{this.map.animateToCoordinate({latitude: this.state.markerLat,longitude: this.state.markerLong,},10)}}><Image style={styles.centerButton} source={require("./center.png")}></Image></TouchableOpacity></View>
          </View>

          <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this._hideModal.bind(this)}
          >
                {this.state.attendance&&
                  <View style={styles.modal}>
                    <View style={{flex:1,flexDirection:'row'}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>Attendance</Text></View>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{fontWeight:'bold',textDecorationLine:'underline'}}>Child</Text></View>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{fontWeight:'bold',textDecorationLine:'underline'}}>Status</Text></View>
                    </View>
                    <View style={{flex:2,flexDirection:'row'}}>
                        {this.state.child1absent?<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><TouchableOpacity onPress={this.markPresent.bind(this,this.state.child1)}><Image source={require("./RedBox.png")}></Image></TouchableOpacity></View>:<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity onPress={this.markAbsent.bind(this,this.state.child1)}><Image source={require("./GreenBox.png")}></Image></TouchableOpacity></View>}
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{this.state.child1}</Text></View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{this.state.child1status}</Text></View>
                    </View>
                    {this.state.child2&&<View style={{flex:2,flexDirection:'row'}}>
                        {this.state.child2absent?<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><TouchableOpacity onPress={this.markPresent.bind(this,this.state.child2)}>
                        <Image source={require("./RedBox.png")}></Image></TouchableOpacity></View>:<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><TouchableOpacity onPress={this.markAbsent.bind(this,this.state.child2)}><Image source={require("./GreenBox.png")}></Image></TouchableOpacity></View>}
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{this.state.child2}</Text></View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{this.state.child2status}</Text></View>
                    </View>}
                  </View>}

                {this.state.settings&&
                  <View style={styles.modal}>
                      <View style={{flex:1,paddingRight:5,paddingLeft:5}}>
                      <View style={{flex:1,borderBottomWidth:1,paddingLeft:10,paddingRight:10,paddingTop:10,justifyContent:'center',alignItems:'center'}}><Text style={{fontWeight:'bold',fontSize:17}}>Settings</Text></View>
                        <View style={{flex:3}}>
                          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity onPress={this.contact.bind(this)}><View style={{height:40,width:150,backgroundColor:"#57B0E3",borderRadius:25,justifyContent:'center',alignItems:'center'}}><Text>Contact</Text></View></TouchableOpacity>
                          </View>
                          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity onPress={this.logout.bind(this)}><View style={{height:40,width:150,backgroundColor:"#57B0E3",borderRadius:25,justifyContent:'center',alignItems:'center'}}><Text>Logout</Text></View></TouchableOpacity>
                          </View>
                        </View>
                      </View>
                      </View>
                }
              </Modal>
        </View>}
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems:'center'
  },
  modal: {
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,marginTop:height(60),height:height(30),backgroundColor:'white'
    },
    busWaysLogoStyle:{
      alignItems:'flex-start',
      marginTop:height(3),
      flexDirection:'row',
      justifyContent:'space-between',
      marginRight:width(2)
    },
    menuStyle:{
        width:width(16),
        height:height(10)
    },
    buttonStyle:{
      width:width(16),
      height:height(10)
    },
    centerView1:{
      height:height(10),
      width:width(30),
      marginTop:height(70),
      marginLeft:width(5),
      justifyContent:'center',
      alignItems:'center'
    },
    centerView2:{
      height:height(10),
      width:width(30),
      marginTop:height(50),
      marginLeft:width(5),
      justifyContent:'center',
      alignItems:'center'
    },
    centerButton:{
      flex:1,
      height:height(8),
      width:width(19)
    }
});
