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
  Dimensions,
  ScrollView
} from 'react-native';
import MapView from 'react-native-maps';
import OneSignal from 'react-native-onesignal';
import timer from 'react-native-timer';
import Modal from 'react-native-modal';
import {StackNavigator,NavigationActions} from 'react-navigation';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import { width, height, totalSize } from 'react-native-dimension';
import { EventRegister } from 'react-native-event-listeners'
import Map1Child from "./Map1Child.js"
import Map2Child from "./Map2Child.js"
import Map3Child from "./Map3Child.js"
import Map4Child from "./Map4Child.js"
import WS from 'react-native-websocket'
import Spinner from 'react-native-loading-spinner-overlay';




export default class MapScreenAndroid extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
      super(props);
      this.state = {
        numChilds:null,
        busRoute:1,
        children:[],
        chil1name:null,
        child2name:null,
        child3name:null,
        child4name:null,
        child1absent:null,
        child2absent:null,
        child3absent:null,
        child4absent:null,
        child1status:null,
        child2status:null,
        child3status:null,
        child4status:null,
        reloadState:false,
        loaded:false,
        mapLatitude:42.3387962,
        mapLongitude: -71.1688257,
        status:[],
        parentToken:null,
        show:false,
        isModalVisible: false,
        isModalVisible2: false,
        attendance:false,
        visible:false,
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


  updateLocation(lat,long) {
    this.setState({
      mapLatitude:lat,
      mapLongitude:long
    })
    this.state.animatedCord.timing({
      latitude:lat,
      longitude:long,
      duration: 7000,
    }).start()
  }




    logout() {
          this.setState({ isModalVisible2: false})
             AsyncStorage.removeItem("parentToken")
             const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({routeName: 'Home'})
          ]
         })
         this.props.navigation.dispatch(resetAction)
    }


    update(){
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
         var children=responseJson
         var numChilds=responseJson.length

         var child1status=null
         var child1absent=false
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

         var child2absent=false
         var child2status=null
         var child2name=null

         if(responseJson[1]) {
           var child2name=responseJson[1].firstName
           if(responseJson[1].onBus===true) {
              child2status="On Bus"
           } else {
             child2status="Off Bus"
           }
           if(responseJson[1].absent) {
             child2status="Absent"
             child2absent=true
           }
         }
         var child3absent=false
         var child3status=null
         var child3name=null

         if(responseJson[2]) {
           var child3name=responseJson[2].firstName
           if(responseJson[2].onBus===true) {
              child3status="On Bus"
           } else {
             child3status="Off Bus"
           }
           if(responseJson[2].absent) {
             child3status="Absent"
             child3absent=true
           }
         }
         var child4absent=false
         var child4status=null
         var child4name=null

         if(responseJson[3]) {
           var child4name=responseJson[3].firstName
           if(responseJson[3].onBus===true) {
              child4status="On Bus"
           } else {
             child4status="Off Bus"
           }
           if(responseJson[3].absent) {
             child4status="Absent"
             child4absent=true
           }
         }
         this.setState({
           numChilds:numChilds,
           children:responseJson,
           child1name:child1name,
           child1absent:child1absent,
           child1status:child1status,
           child2name:child2name,
           child2absent:child2absent,
           child2status:child2status,
           child3name:child3name,
           child3status:child3status,
           child3absent:child3absent,
           child4name:child4name,
           child4status:child4status,
           child4absent:child4absent
         })
       })
       .catch((err) => {
         console.log(err)
       })
    }




  onReceived() {
    EventRegister.emit('update', 'it works!!!')
  }

  componentWillUnmount() {
     OneSignal.removeEventListener('received', this.onReceived);
     EventRegister.removeEventListener(this.listener)
   }

   componentWillMount() {
        this.listener = EventRegister.addEventListener('update', (data) => {
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
             var children=responseJson
             var numChilds=responseJson.length

             var child1status=null
             var child1absent=false
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

             var child2absent=false
             var child2status=null
             var child2name=null

             if(responseJson[1]) {
               var child2name=responseJson[1].firstName
               if(responseJson[1].onBus===true) {
                  child2status="On Bus"
               } else {
                 child2status="Off Bus"
               }
               if(responseJson[1].absent) {
                 child2status="Absent"
                 child2absent=true
               }
             }
             var child3absent=false
             var child3status=null
             var child3name=null

             if(responseJson[2]) {
               var child3name=responseJson[2].firstName
               if(responseJson[2].onBus===true) {
                  child3status="On Bus"
               } else {
                 child3status="Off Bus"
               }
               if(responseJson[2].absent) {
                 child3status="Absent"
                 child3absent=true
               }
             }
             var child4absent=false
             var child4status=null
             var child4name=null

             if(responseJson[3]) {
               var child4name=responseJson[3].firstName
               if(responseJson[3].onBus===true) {
                  child4status="On Bus"
               } else {
                 child4status="Off Bus"
               }
               if(responseJson[3].absent) {
                 child4status="Absent"
                 child4absent=true
               }
             }
             this.setState({
               numChilds:numChilds,
               children:responseJson,
               child1name:child1name,
               child1absent:child1absent,
               child1status:child1status,
               child2name:child2name,
               child2absent:child2absent,
               child2status:child2status,
               child3name:child3name,
               child3status:child3status,
               child3absent:child3absent,
               child4name:child4name,
               child4status:child4status,
               child4absent:child4absent
             })
           })
           .catch((err) => {
             console.log(err)
           })
        })
    }


  componentDidMount() {
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
              id:value
            })
          })
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              mapLatitude:responseJson[0],
              mapLongitude:responseJson[1],
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
            console.log("error getting location",err)
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
             var children=responseJson
             var numChilds=responseJson.length

             var child1status=null
             var child1absent=false
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

             var child2absent=false
             var child2status=null
             var child2name=null

             if(responseJson[1]) {
               var child2name=responseJson[1].firstName
               if(responseJson[1].onBus===true) {
                  child2status="On Bus"
               } else {
                 child2status="Off Bus"
               }
               if(responseJson[1].absent) {
                 child2status="Absent"
                 child2absent=true
               }
             }
             var child3absent=false
             var child3status=null
             var child3name=null

             if(responseJson[2]) {
               var child3name=responseJson[2].firstName
               if(responseJson[2].onBus===true) {
                  child3status="On Bus"
               } else {
                 child3status="Off Bus"
               }
               if(responseJson[2].absent) {
                 child3status="Absent"
                 child3absent=true
               }
             }
             var child4absent=false
             var child4status=null
             var child4name=null

             if(responseJson[3]) {
               var child4name=responseJson[3].firstName
               if(responseJson[3].onBus===true) {
                  child4status="On Bus"
               } else {
                 child4status="Off Bus"
               }
               if(responseJson[3].absent) {
                 child4status="Absent"
                 child4absent=true
               }
             }
             this.setState({
               numChilds:numChilds,
               children:responseJson,
               child1name:child1name,
               child1absent:child1absent,
               child1status:child1status,
               child2name:child2name,
               child2absent:child2absent,
               child2status:child2status,
               child3name:child3name,
               child3status:child3status,
               child3absent:child3absent,
               child4name:child4name,
               child4status:child4status,
               child4absent:child4absent
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


  contact() {
    Alert.alert(
    "Contact BusWays",
    "support@buways.net",
    [
      {text: 'Ok', onPress: () => console.log('cancel')}
    ]
  )
  }
  privacy() {
    this.setState({ isModalVisible2: false})
    const { navigate } = this.props.navigation;
    navigate('PrivacyAfter')
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
      _showModalAttendance = () => {
        EventRegister.emit('update', 'it works!!!')
        this.setState({ isModalVisible: true,attendance:true })
      }
      _showModalSettings= () => this.setState({ isModalVisible2: true,settings:true })


  _hideModal = () => this.setState({ isModalVisible: false,attendance:false,settings:false})
  _hideModal2 = () => this.setState({ isModalVisible2: false,attendance:false,settings:false})




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
        absent=<TouchableOpacity><Image source={require("./GreenBox.png")}></Image></TouchableOpacity>
      } else {
        absent=<TouchableOpacity><Image source={require("./RedBox.png")}></Image></TouchableOpacity>
      }
          childrenRender.push(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{child.firstName}</Text></View>)
          statusRender.push(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{status}</Text></View>)
          attenanceRender.push(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>{absent}</View>)
          markAbsentRender.push(<View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'blue',marginTop:10,marginBottom:10,borderRadius:25}}><Text> Mark Absent</Text></View>)
        })


    return (
      <View style={{flex:1}}>
      <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
      {(!this.state.loaded)&&<View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}><Image style={{width: 130, height: 45}} source={require("./busways_logo.png")}></Image></View>}
      {(this.state.loaded)&&<View style={{flex:1}}>
      <WS
         ref={ref => {this.ws = ref}}
         url="https://damp-mesa-39329.herokuapp.com"
         onOpen={() => {
           var parentSocketData={
             type:"parent",
             id:this.state.parentToken
           }
           this.ws.send(JSON.stringify(parentSocketData))
         }}
         onMessage={
           ({ data }) => {
            var data=JSON.parse(data)
             if(!data.data.location1) {
               return;
             }
             if(this.state.busRoute===1) {
                if(data.data.location1.latitude===null||data.data.location1.longitude===null) {
                  return;
                }
               var lat=data.data.location1.latitude
               var long=data.data.location1.longitude
               this.updateLocation(lat,long)
             }
             if(this.state.busRoute===2){
               if(data.data.location1.latitude===null||data.data.location1.longitude===null) {
                 return;
               }
               var lat=data.data.location2.latitude
               var long=data.data.location2.long
               this.updateLocation(lat,long)
             }
           }
         }
         onError={console.log}
         onClose={console.log}
         reconnect // Will try to reconnect onClose
       />
                <View style={{flex:3}}>
                  <MapView
                  showsCompass={false}
                  rotateEnabled={false}
                  onRegionChange={this.regionChange.bind(this)}
                  style={styles.map}
                  initialRegion={this.state.region}
                  ref={map => this.map = map}
                  minDelta={0.015}
              >
              <MapView.Marker.Animated
                ref={marker => this.marker = marker}
                coordinate={this.state.animatedCord}
                anchor={{x: 0.5, y: 1}}
                centerOffset={{x: 0.5, y: 1}}
            >

            <Image source={require("./maptracker3.png")} style={styles.mapTracker} />
            </MapView.Marker.Animated>
          </MapView>
          <View style={{flex:1}}>
              <View style={styles.busWaysLogoStyle}><TouchableOpacity onPress={this.show.bind(this)}><Image style={styles.menuStyle} source={require("./menu.png")}></Image></TouchableOpacity></View>
              <View style={{alignItems:'flex-end',paddingRight:width(3),marginLeft:width(10)}}></View>
               {(this.state.show)&&<View style={{marginRight:width(79),marginLeft:width(5),height:height(10),alignItems:'flex-start',marginTop:height(3)}}>
               <View style={{height:height(9),width:width(10),justifyContent:'center',alignItems:'center'}}>
               <TouchableOpacity onPress={this._showModalAttendance.bind(this)}><Image style={styles.buttonStyle2} source={require("./Attendance.png")}></Image></TouchableOpacity></View></View>}
               {(this.state.show)&&<View style={{marginRight:width(79),marginLeft:width(5),height:height(10),marginTop:height(3),alignItems:'flex-start'}}>
                <View style={{height:height(9),width:width(10),justifyContent:'center',alignItems:'center'}}><TouchableOpacity onPress={this._showModalSettings.bind(this)}><Image style={styles.buttonStyle} source={require("./Settings.png")}></Image></TouchableOpacity></View></View>}
               </View>
            <View style={styles.centerView}><TouchableOpacity onPress={()=>{this.map.animateToCoordinate({latitude: this.state.mapLatitude,longitude: this.state.mapLongitude},1000)}}><Image style={styles.centerButton} source={require("./locationCenter.png")}></Image></TouchableOpacity></View>
          </View>

          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={this._hideModal.bind(this)}
          >

          {this.state.numChilds===1&&<Map1Child updateChildren={()=>this.update()} closePress={()=>this.setState({ isModalVisible: false})} child1name={this.state.child1name} child1absence={this.state.child1absent} child1status={this.state.child1status} parentToken={this.state.parentToken}/>}
          {this.state.numChilds===2&&<Map2Child updateChildren={()=>this.update()} closePress={()=>this.setState({ isModalVisible: false})} child1name={this.state.child1name} child1absence={this.state.child1absent} child1status={this.state.child1status}
           child2name={this.state.child2name} child2absence={this.state.child2absent} child2status={this.state.child2status} parentToken={this.state.parentToken}
          />}
          {this.state.numChilds===3&&
          <Map3Child updateChildren={()=>this.update()} closePress={()=>this.setState({ isModalVisible: false})} child1name={this.state.child1name} child1absence={this.state.child1absent} child1status={this.state.child1status}
           child2name={this.state.child2name} child2absence={this.state.child2absent} child2status={this.state.child2status}
           child3name={this.state.child3name} child3absence={this.state.child3absent} child3status={this.state.child3status} parentToken={this.state.parentToken}
          />}
          {this.state.numChilds===4&&<Map4Child updateChildren={()=>this.update()} closePress={()=>this.setState({ isModalVisible: false})} child1name={this.state.child1name} child1absence={this.state.child1absent} child1status={this.state.child1status}
                    child2name={this.state.child2name} child2absence={this.state.child2absent} child2status={this.state.child2status}
                    child3name={this.state.child3name} child3absence={this.state.child3absent} child3status={this.state.child3status}
                    child4name={this.state.child4name} child4absence={this.state.child4absent} child4status={this.state.child4status} parentToken={this.state.parentToken}
                   />}
              </Modal>
              <Modal
                isVisible={this.state.isModalVisible2}
                onBackdropPress={this._hideModal2.bind(this)}
              >
              <View style={styles.modal}>
                        <View style={{height:height(9),flexDirection:'row',backgroundColor:'rgb(247,247,247)'}}>
                          <View style={{flex:5}}><View style={{flex:1,margin:width(4),marginLeft:width(6),borderBottomWidth:2,borderColor:'#E1E1E1',justifyContent:'flex-end'}}><Text style={{fontSize:23,fontWeight:'bold',color:"#979797"}}>Settings</Text></View></View>
                          <View style={{flex:1,justifyContent:'flex-end',paddingBottom:height(2)}}><TouchableOpacity onPress={()=>this.setState({ isModalVisible2: false})}><Text style={{fontSize:25,fontWeight:'bold',color:"#4A90E2"}}>X</Text></TouchableOpacity></View>
                        </View>
                        <View style={{height:height(8),justifyContent:'center',alignItems:'center'}}>
                            <View style={{flex:1}}>
                              <TouchableOpacity onPress={this.contact.bind(this)}><View style={{ marginTop:height(5),shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.8,shadowRadius: 2,height:height(9),width:width(65),backgroundColor:'white',borderRadius:12,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:20,color:"#979797"}}>Contact Busways</Text></View></TouchableOpacity>
                                <TouchableOpacity onPress={this.privacy.bind(this)}>
                                  <View style={{ marginTop:height(5),shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.8,shadowRadius: 2,height:height(9),width:width(65),backgroundColor:'white',borderRadius:12,justifyContent:'center',alignItems:'center'}}>
                                  <Text style={{fontSize:20,color:"#979797"}}>Privacy Policy</Text>
                                  </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.logout.bind(this)}><View style={{ marginTop:height(5),shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.8,shadowRadius: 2,height:height(9),width:width(65),backgroundColor:'white',borderRadius:12,justifyContent:'center',alignItems:'center'}}>
                                  <Text style={{fontSize:20,color:"#979797"}}>Logout</Text></View></TouchableOpacity>
                            </View>
                        </View>
                     </View>
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
      shadowOpacity: 0.8,marginTop:height(60),height:height(80),backgroundColor:'rgb(247,247,247)',
    },
    busWaysLogoStyle:{
      alignItems:'flex-start',
      marginTop:height(3),
      flexDirection:'row',
      justifyContent:'space-between',
      marginRight:width(2),
      paddingRight:width(4),
      paddingLeft:width(2)
    },
    menuStyle:{
        width:width(16),
        height:height(9),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 1,
        marginTop:height(1)
    },
    buttonStyle:{
      width:width(14),
      height:height(8),
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.7,
      shadowRadius: 1,
    },
    buttonStyle2:{
      width:width(14),
      height:height(8),
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.7,
      shadowRadius: 1,
    },
    centerView:{
      height:height(10),
      width:width(30),
      marginTop:height(70),
      justifyContent:'center',
      alignItems:'flex-start',
      marginBottom:height(5),
      paddingLeft:width(1)
    },
    centerButton:{
      flex:1,
      height:height(8),
      width:width(19),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.7,
      shadowRadius: 2,
    },
    mapTracker:{
      height: height(8),
      width: width(13)
    }
});
