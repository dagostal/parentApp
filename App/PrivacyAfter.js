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
  View,
  ScrollView,
  Alert
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import {StackNavigator,NavigationActions} from 'react-navigation';




export default class PrivacyAfter extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      accept: false
    };
  }

    back() {
      const backAction = NavigationActions.back({
         key: null
             })
        this.props.navigation.dispatch(backAction)
    }



  render() {
    return (
            <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{backgroundColor:'white',flex:1,marginTop:20}}>
            <View style={{backgroundColor:'white',height:height(10),borderBottomWidth:1,borderBottomColor:'#00a2fe',marginTop:10}}>
              <View style={{flex:1}}><Text style={{marginLeft:20,fontSize:25,color:'#1CA4FA',fontWeight:'bold'}}>Terms of Service</Text></View>
              <View style={{flex:1}}><Text style={{fontStyle:"italic",marginLeft:20,fontSize:12,color:'#D2D2D2',fontWeight:'bold'}}>BusWays LLC @</Text></View>
            </View>
            <ScrollView style={{backgroundColor:'white',marginLeft:20,marginRight:20}}>
              <View style={{flex:1,paddingTop:35}}>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>This terms of use agreement (the “Terms of Use”) is a binding agreement between you (sometimes referred to herein as the “End User”) and BusWays, LLC (the “Company”). The Terms of Use governs your use of BusWays’ mobile application (the “App”). The App is licensed, not sold, to you. By accessing or using the App, you accept, without limitation or qualification, these Terms of Use. The Company may, at any time and without notice, adjust these Terms of Use by updating them on its website, www.busways.net (the “Website”). Your continued use of the Service constitutes an acceptance on your part of any such revisions. You are therefore advised to periodically visit the Website to review any updated Terms of Use.
</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>If any of the Company’s services or applications expressly set forth in writing separate or additional terms of service or other policies (“Separate Terms”), then those Separate Terms, as altered periodically, shall apply in connection with your use of that service or application. To the extent there is a direct conflict between such Separate Terms and these Terms of Use, the Separate Terms shall govern.
</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>By downloading and using the App, you: (a) acknowledge that you have read and understand the Terms of Use; and (c) accept the Terms of Use and agree that you are legally bound by its terms. If you do not agree to these terms, please do not download and use the App and delete it from your mobile device.</Text></View>
                  <View style={{marginTop:10}}><Text style={{fontSize:20,color:'#9b9b9b',fontWeight:'bold'}}>1. Description of Service</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The App allows parents to track their children’s bus and be notified when their child gets on or off the bus and allows administrators to keep, track, and gather key data points on their transportation system. Parents and administrators are referred to as the “End Users” for purposes of this Terms of Use.</Text></View>
                  <View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>2. Membership</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>2.1 Eligibility</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The App is available to all individuals except any temporarily or indefinitely suspended End Users. The Company reserves the right, in its sole discretion, to suspend or terminate your use of the App and refuse any and all current or future use of all or any portion of the App.</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>2.2 Password and Security</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>When you complete the App’s registration process, you will create a password that will enable you to access the App. You agree to maintain the confidentiality of your password and are fully responsible for all liability and damages resulting from your failure to maintain that confidentiality and all activities that occur through the use of your password. You agree to immediately notify the Company at support@busways.net of any unauthorized use of your password or any other breach of security. You agree that the Company cannot and will not be liable for any loss or damage arising from your failure to comply with this section.</Text></View>
                  <View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>3. Fees and Payments</Text></View>

                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:"#9b9b9b"}}>Access to and use of selected basic features (the “Basic Features”) of the App is free. However, the Company may charge fees for various premium features and services (the “Premium Features”) that may be available on the App, and the Company will notify you of those charges at the time that the Company offers such Premium Features. The Company may, in its sole discretion, and by notifying you on the Website, begin charging for access to the Basic Features, and the Company may, in its sole discretion, add, remove, or change the features and services available on the App or the fees that the Company charges at any time. If the Company introduces a new service or charges a new fee, the Company will notify you of the fees for that service at the launch of the service or the start of charging the new fee. If the Company notifies you of new fees or changes the fees for an existing service, you agree to pay all fees and charges specified and all applicable taxes for your continued use of the applicable service. The Company is not responsible for any charges or expenses you incur resulting from being billed for Premium Features in accordance with these Terms of Use including but not limited to overdrawn accounts and exceeding account limits.
</Text></View>
                  <View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#1CA4FA',fontWeight:'bold',color:'#9b9b9b'}}>4 Personal Information </Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>4.1 Definition</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:"#9b9b9b"}}>“Personal Information” is defined with respect to this Terms of Use as any information post or other material you provide (directly or indirectly), including but not limited to information through the registration process for the Company, the use of the App, any message, any public comment, or any e-mail. Publicly accessible areas of the App are those areas that are available either to some or all of the Company’s End Users (i.e., not restricted to your viewing only). You should understand that your Personal Information may be accessible by and made public through syndication programs, including but not limited to data feed tools, and by search engines, metasearch tools, crawlers, and other similar programs.</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>4.2 Collection and Use of Information</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:"#9b9b9b"}}>You acknowledge that when you download, install, or use the App, the Company may use automatic means, including but not limited to cookies and web beacons, to collect data about your mobile device and use of the App. You also may be required to provide certain Personal Information as a condition to downloading, installing, or using the App or certain features of the App, and the App may provide you with opportunities to share Personal Information about yourself with others. All information that the Company collects through or in connection with this App is subject to our Mobile Application Privacy Policy (the “Privacy Policy”), found at www.busways.net/privacy-policy. By downloading, installing, and using this App and providing Personal Information to or through this App, you consent to all actions taken by the Company with respect to your Personal Information in compliance with the Privacy Policy. Any other communication or material you transmit to the Company, such as questions, comments, or suggestions, will be treated as non-confidential and non-proprietary.</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>4.3 Restrictions</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:"#9b9b9b"}}>In consideration of your use of the App, you agree that your Personal Information:</Text></View>
                  <View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>a. Shall not be fraudulent</Text></View>
                  <View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>b. Shall not infringe any third partys copyright, patent, trademark, trade secret, or other proprietary rights or rights of publicity or privacy;</Text></View>
                  <View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>c. Shall not violate any law, statute, ordinance or regulation;</Text></View>
                  <View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>d. Shall not be defamatory, trade libelous, unlawfully threatening, or unlawfully harassing;</Text></View>
                  <View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>e. Shall not contain any viruses, Trojan horses, worms, time bombs, cancelbots, or other computer programming routines that may damage, detrimentally interfere with, surreptitiously intercept, or expropriate any system, data, or End User Personal Information;</Text></View>
                  <View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>f. Shall not create liability for the Company or cause the Company to lose, in whole or in part, the services of the Company’s ISPs or other suppliers; and </Text></View>
                  <View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>g. Shall not link directly or indirectly to any materials to which you do not have a right to link to or include. In addition, you agree that you will provide the Company with your valid, current email address, both at the time of your registration with the Company and from time to time as your email address changes</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>4.4 License of Information</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:"#9b9b9b"}}>The Company does not claim ownership of your Personal Information and will use Personal Information only in accordance with the Privacy Policy. However, to enable the Company to use your Personal Information and to ensure that the Company does not violate any rights you may have in your Personal Information, you grant the Company a non-exclusive, worldwide, perpetual, irrevocable, royalty-free right to exercise, commercialize the copyright, publicity, and database rights (but no other rights) you have in your Personal Information, in any media now known or not currently known, with respect to your Personal Information.</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>4.5 Consent to Disclosure</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:"#9b9b9b"}}>You acknowledge and agree that the Company may disclose your Personal Information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to:</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>a. Comply with a current judicial proceeding, a court order, or legal process served on the Company;</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>b. Enforce these Terms of Use; </Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>c. Respond to claims that your Personal Information violates the rights of a third party;  </Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>d. Protect the rights, property, or personal safety of the Company, its employees, End Users, and the public; or </Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>e. Enable the transfer or sale to another entity of all or substantially all of the Company’s assets in the line of business to which the Terms of Use relates, or upon any other corporate reorganization, subject to the representations made in the Terms of Use. The Company also may disclose any information about you to law enforcement or other government officials as we, in our sole discretion, believe necessary or appropriate, in connection with an investigation of fraud, intellectual property infringements, or other activity that is illegal or that we believe may expose either the Company or you to legal liability.</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>4.6 Restriction on Use of Your Information</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:"#9b9b9b"}}>Except as otherwise provided in the Privacy Policy, the Company will not sell, rent, or otherwise disclose any of your Personal Information to any third party.</Text></View>



                  <View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>5. Use of the App</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>5.1 General Practices</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:"#9b9b9b"}}>You acknowledge and agree that the Company may establish general practices and limits concerning the use of the App. You agree that the Company has no responsibility or liability for the storage, the deletion of, or the failure to store or delete any of your Personal Information. You acknowledge that the Company reserves the right to log off End Users who are inactive for an extended period of time. In addition, you acknowledge that the Company reserves the right to change these general practices and limits at any time, in the Company’s sole discretion, with or without notice.</Text></View>
                  <View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>5.2 Control</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:"#9b9b9b"}}>You, and not the Company, are entirely responsible for all of the Personal Information, as defined in Section 4, that you upload, post, e-mail, transmit, or otherwise make available via the App. The Company does not control your Personal Information or the Personal Information posted by other End Users and does not guarantee the accuracy, integrity, or quality of your Personal Information or the Personal Information posted by other End Users. The Company does not endorse any opinions expressed by you or other End Users. You understand that by using the App, you may be exposed to information that is offensive or objectionable. The Company does not have any obligation to monitor nor does the Company take responsibility for your Personal Information or Personal Information posted by other End Users. You agree that under no circumstances will the Company, its directors, officers, members, employees, consultants, agents, advisers, affiliates, subsidiaries, or its third party partners be liable in any way for any information, including but not limited to any errors or omissions in your Personal Information or the Personal Information posted by other End Users, or for any loss or damage of any kind incurred as a result of the use of your Personal Information, Personal Information posted by other End Users, or information posted, e-mailed, transmitted, or otherwise made available in connection with the App, or for any failure to correct or remove information.</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>5.3 API Licence</Text></View>


<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>a. Subject to the terms and conditions of this Terms of Use, the Company grants you as the licensee (referred to herein as the “Licensee”) a limited, non-exclusive, non-transferable, non-sub-licensable license (the “License”) to use any application programming interface (“API”) that the Company makes available to:</Text></View>
<View style={{marginTop:10,marginLeft:15,marginRight:5}}><Text style={{color:"#9b9b9b"}}> i. Download, install, and use the App for your personal, non-commercial use on a single mobile device owned or otherwise controlled by you strictly in accordance with the App’s documentation; and</Text></View>
<View style={{marginTop:10,marginLeft:15,marginRight:5}}><Text style={{color:"#9b9b9b"}}> ii. Access, stream, download, and use on such mobile device the content and services made available in or otherwise accessible through the App, strictly in accordance with this Terms of Use. </Text></View>


<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>b. Licensee shall not:</Text></View>
<View style={{marginTop:10,marginLeft:15,marginRight:5}}><Text style={{color:"#9b9b9b"}}> i. Copy the App, except as expressly permitted by this License;</Text></View>
<View style={{marginTop:10,marginLeft:15,marginRight:5}}><Text style={{color:"#9b9b9b"}}> ii. Modify, translate, adapt, or otherwise create derivative works or improvements, whether or not patentable, of the App;</Text></View>
<View style={{marginTop:10,marginLeft:15,marginRight:5}}><Text style={{color:"#9b9b9b"}}> iii. Reverse engineer, disassemble, decompile, decode, or otherwise attempt to derive or gain access to the source code of the App or any part thereof;   </Text></View>
<View style={{marginTop:10,marginLeft:15,marginRight:5}}><Text style={{color:"#9b9b9b"}}> iv. Remove, delete, alter, or obscure any trademarks or any copyright, trademark, patent, or other intellectual property or proprietary rights notices from the Application, including any copy thereof; or</Text></View>
<View style={{marginTop:10,marginLeft:15,marginRight:5}}><Text style={{color:"#9b9b9b"}}> v. Rent, lease, lend, sell, sub-license, assign, distribute, publish, transfer, or otherwise make available the App or any features or functionality of the App to any third party for any reason, including by making the App available on a network where it is capable of being accessed by more than one device at any time.</Text></View>



<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>c. Reservation of Rights. You acknowledge and agree that the App is provided under license, and not sold, to you. You do not acquire any ownership interest in the App under this Terms of Use or any other rights thereto other than to use the App in accordance with the License granted and subject to all terms, conditions, and restrictions, under this Terms of Use. The Company reserves and shall retain its entire right, title, and interest in and to the App, including all copyrights, trademarks, and other intellectual property rights therein or relating thereto, except as expressly granted to you in this Terms of Use.</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>5.4 Grounds for Removal, Sanction, or Suspension.</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:"#9b9b9b"}}>Notwithstanding any other provision of the Terms of Use, the following types of actions are cause for immediate removal, repeal and/or suspension or termination of your account. The following list is illustrative, not exhaustive:</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>a. Encouraging others to violate this Terms of Use;</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>b. Refusing to follow the Company staff instruction or direction;</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>c. Violation (intentional or unintentional) of this Terms of Use, or of any applicable local, state, national, or international law, statute, ordinance, or regulation;
</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>d. Disclosing the Personal Information of any other End User; or</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>5.5 Interference with the App.
</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:"#9b9b9b"}}>You agree that you will not:</Text></View>




<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>a. Upload, post, email, or otherwise transmit any computer routines, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications equipment;</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>b. Interfere with or disrupt the App or networks connected to the Website or through the use of the App, or disobey any requirements, procedures, policies, or regulations of networks connected to Website or through the use of the App, or otherwise interfere with the App in any way, including but not limited to the use of JavaScript, active, or other coding;</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>c. Take any action that imposes an unreasonable or disproportionately large load on the App’s infrastructure; or</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>d. Copy, reproduce, alter, modify, or publicly display any information displayed on the App (except for your Personal Information), or create derivative works from the Website (other than from your Personal Information), to the extent that such action(s) would constitute copyright infringement or otherwise violate the intellectual property rights of the Company or any other third party, except with the prior written consent of the Company or the appropriate third party.</Text></View>



<View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>6. Updates</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>6.1 Company Updates to App</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The Company may from time to time in its sole discretion develop and provide App updates, which may include upgrades, bug fixes, patches and other error corrections and/or new features (collectively, “Updates”). Updates may also modify or delete in their entirety certain features and functionality. You agree that the Company has no obligation to provide any Updates or to continue to provide or enable any particular features or functionality. Based on your mobile device settings, when your mobile device is connected to the Internet either the App will automatically download and install all available Updates or you may receive notice of or be prompted to download and install available Updates</Text></View>



<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>6.2 Update Downloads</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>You shall promptly download and install all Updates in a timely manner and you acknowledge and agree that the App or portions thereof may not properly operate should you fail to do so. You further agree that all Updates will be deemed part of the App and be subject to all terms and conditions of this Terms of Use.</Text></View>


<View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>7. Third Party Materials</Text></View>


<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>7.1 Third Party Content</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The App may display, include or make available third party content, including but not limited to data, information, applications, and other products services or materials, or provide links to third party websites or services, including through third-party advertising (“Third Party Materials”)</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>7.2 Third Party Liability</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>You acknowledge and agree that the Company is not responsible for Third Party Materials, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality, or any other aspect thereof. The Company does not assume and will not have any liability or responsibility to you or any other person or entity for any Third Party Materials. Third Party Materials and links thereto are provided solely as a convenience to you, and you access and use them at entirely at your own risk and subject to such third parties’ terms and conditions.</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>7.3 Third Party Dealings</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>Your correspondence or business dealings with or participation in promotions of marketing partners or other third parties found on our website or through the App, including payment and delivery of related goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between you and such marketing partner or other third party. You agree that the Company shall not be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such marketing partners or other third parties on t website or located through the use of the App.</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>7.4 Third Party Resources</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The Company may provide, or third parties may provide, links to other resources provided and maintained by third parties (“Third Party Resources”) via the App. Because the Company has no control over such Third Party Resources, you acknowledge and agree that the Company is not responsible for the availability of such Third Party Resources and that the Company does not endorse and is not responsible or liable for any content, advertising, products, or other materials on or available from such Third Party Resources. You also acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such Third Party Resources.</Text></View>




<View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>8. Communications from the Company and Members of the Company’s Community</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>8.1 Company Communications</Text></View>


<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>You understand that certain communications, such as the Company service announcements and newsletters, offers of sponsorship, and promotions relevant and beneficial to you are part of the App. You may receive emails from other members of the Company via your e-mail address. In addition, when you use the App or send emails to the Company, you are communicating with us electronically. By using the App, you expressly agree to receive such communications from the Company. The Company will communicate with you by e-mail or by posting notices on the App. You agree that all communications that we provide to you electronically satisfy any legal requirement that such communications be made in writing.</Text></View>


<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>8.2 Third Party and End User Communications</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>In an attempt to provide increased value to our users, the Company may link the App to sites or applications operated by third parties. The Company does not endorse the content or any products or services available on such sites or applications. In addition, even if the third party is affiliated with the Company, the Company has no control over these linked sites, all of which may have separate privacy and data collection practices, independent of the Company. You may find third party links or End Users’ information to be offensive, harmful, inaccurate or deceptive. Please use caution and common sense when using the App. Please note there is a risk that you may be dealing with underage persons or people acting under false pretense.</Text></View>



<View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>9. Trademarks; Copyrights; Proprietary Rights</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>9.1 Company Trademarks</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The Company trademarks, service marks, and other the Company logos, products, and service names, are trademarks of BusWays, LLC (collectively, the “Company Trademarks”). Except as otherwise permitted by law, you agree not to display or use in any manner the Company Trademarks without the Company’s prior written consent.</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>9.2 Copyrights and Trademarks of Others</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The Company respects the intellectual property of others and expects the Company’s End Users to do the same. To the extent the Company uses a trademark that is the property of a third party, the Company shall provide clear notice to anyone viewing the Company’s use of that trademark that the Company does not own the trademark and that the trademark is the property of a third party, that the Company has no affiliation, connection, or association with that third party, and, if applicable, that third party has not approved or sponsored the Company’s use of the trademark in any way. The Company may, in appropriate circumstances and in its discretion, remove or disable access to material that infringes on the rights of others and terminate access to the App to those who may be repeat infringers. The Digital Millennium Copyright Act (the “DMCA”) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you believe that your work has been copied in a way that constitutes copyright infringement or your intellectual property rights have been otherwise violated, please provide the Company the following information:</Text></View>

<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>a. An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest; </Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>b. A description of the copyrighted work or other intellectual property that you claim has been infringed; </Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>c. A description of where the material that you claim is infringing is located on the site;</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>d. Your address, telephone number, and email address;</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>e. A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and;</Text></View>
<View style={{marginTop:10,marginLeft:10,marginRight:5}}><Text style={{color:"#9b9b9b"}}>f. A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owners behalf;</Text></View>





<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>All notices described above should be sent to a BusWays designated agent by email to support@busways.net. We suggest that you consult a legal advisor before filing a notice as the above-stated notification requirements may have changed. Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or an activity is infringing may be subject to liability.
</Text></View>



<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>9.3 Proprietary Rights</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>You acknowledge and agree that the App contains proprietary and confidential information that is protected by applicable intellectual property and other laws. You also acknowledge and agree that content contained in sponsor advertisements or information presented to you through the App or advertisers is protected by copyrights, trademarks, service marks, patents, or other proprietary rights and laws. Except as consented to by the Company or advertisers in writing, you agree not to modify, rent, lease, loan, sell, distribute, or create derivative works based on the App, in whole or in part.</Text></View>

<View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>10. Term and Termination</Text></View>


<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>10.1</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The term of this Terms of Use commences when you download the App and will continue in effect until terminated by you or by the Company</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>10.2</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>You may terminate this Terms of Use by deleting the App and all copies thereof from your mobile device</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>10.3</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The Company may terminate this Terms of Use at any time without notice if it ceases to support the App, which the Company may do in its sole discretion. In addition, this Terms of Use will terminate immediately and automatically without any notice if you violate any of the terms and conditions of this Terms of Use.</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>10.4</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>Upon termination, all rights granted to you under this Terms of Use will also terminate and you must cease all use of the App and delete all copies of the App from your mobile device</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>10.5</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>Termination will not limit any of the Company’s rights or remedies at law or in equity</Text></View>


<View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>11. Disclaimer of Warranties</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>
THE COMPANY PROVIDES THE APP ON AN “AS IS” BASIS. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY MAKES NO WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING THE USE OR RESULTS OF THE APP IN TERMS OF ITS CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. THE COMPANY SHALL HAVE NO LIABILITY FOR ANY INTERRUPTIONS IN THE USE OF THE APP. THE COMPANY DISCLAIMS ALL WARRANTIES WITH REGARD TO THE INFORMATION PROVIDED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A GENERAL PURPOSE, AND NON-INFRINGEMENT. WITHOUT LIMITATION TO THE FOREGOING, COMPANY PROVIDES NO WARRANTY OR UNDERTAKING, AND MAKES NO REPRESENTATION OF ANY KIND THAT THE APPLICATION WILL MEET YOUR REQUIREMENTS, ACHIEVE ANY INTENDED RESULTS, BE COMPATIBLE, OR WORK WITH ANY OTHER SOFTWARE, APPLICATIONS, SYSTEMS, OR SERVICES, OPERATE WITHOUT INTERRUPTION, MEET ANY PERFORMANCE OR RELIABILITY STANDARDS OR BE ERROR-FREE, OR THAT ANY ERRORS OR DEFECTS CAN OR WILL BE CORRECTED. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF OR LIMITATIONS ON IMPLIED WARRANTIES OR LIMIATIONS ON THE APPLICABLE STATUTORY RIGHTS OF A CONSUMER, AND THEREFORE THE ABOVE-REFERENCED EXCLUSIONS AND LIMIATIONS MAY BE INAPPLICABLE.</Text></View>




<View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>12. Limitation of Liability</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>
TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE THAT IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR PERSONAL INJURY, PROPERTY DAMAGE, LOSS OF PROFITS, LOSS OF GOODWILL, LOSS OF USE, LOSS OF DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH THE APP, YOUR USE OF THE APP, THE TERMS OF USE, OR THE INABILITY TO USE OUR APP, THIRD PARTY TRANSACTIONS. THE FOREGOING LIMIATIONS WILL APPLY WHETHER SUCH DAMAGES ARISE OUT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE AND REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR THE COMPANY WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OF LIABILITY SO SOME OR ALL OF THE ABOVE LIMITATIONS OF LIABILITY MAY NOT APPLY TO YOU.
</Text></View>

<View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>13. Indemnification</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>
You agree to indemnify and hold harmless the Company and its officers, directors, , agents, employees, consultants, affiliates, subsidiaries, and third party partners from any claim or demand, including reasonable attorneys’ fees, relating to or arising out of your breach of your representations and warranties or this Terms of Use, your use of the App, your Personal Information, your violation of any law, statute, ordinance, or regulation, or the rights of a third party. Without limiting the foregoing, you, as an End User, agree to indemnify and hold harmless the Company and its officers, directors, members, agents, employees, consultants, affiliates, subsidiaries, and third party partners from any claim or demand, including reasonable attorneys’ fees, made by any End User or third party due to or arising out of your actions as an End User of the App
</Text></View>

<View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>14. Dispute Resolution </Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>
You agree to attempt in good faith to resolve any dispute, claim or controversy arising out of or relating to these Terms of Service including the documents it incorporates by reference. In the event that the dispute, claim or controversy is not resolved by these negotiations, the matter will be submitted to Judicial Arbitration and Mediation Services, Inc. (“JAMS”), or its successor, for mediation and, if the matter is not resolved through mediation, then it shall be submitted to JAMS, or its successor, for final and binding arbitration. Nonetheless, legal action taken by the Company to collect any fees, recover damages for, or obtain an injunction relating to, the operations of the App or intellectual property, shall not be submitted to mediation or arbitration except as otherwise agreed to in writing by the Company. In addition, either you or the Company may seek any interim or preliminary relief from a court of competent jurisdiction in the State of Delaware necessary to protect the rights or property of you or the Company pending the completion of arbitration
</Text></View>
<View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>15. Export Regulation  </Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>
The App may be subject to United States export control laws, including the United States Export Administration Act and its associated regulations. You shall not, directly or indirectly, export, re-export, or release the App to, or make the App accessible from, any jurisdiction or country to which export, re-export, or release is prohibited by law, rule, or regulation. You shall comply with all applicable federal laws, regulations, and rules, and complete all required undertakings (including obtaining any necessary export license or other governmental approval), prior to exporting, re-exporting, releasing, or otherwise making the App available outside the U.S
</Text></View>

<View style={{marginTop:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#9b9b9b',fontWeight:'bold'}}>16. Miscellaneous </Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>16.1 Notices</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>Except as otherwise stated in this Terms of Use or as expressly required by local law, any notice to us shall be given by certified postal mail to 445 Barry Avenue, Apt. 329, Chicago, IL 60657, or by email to pedro@busways.net, and any notice to you shall be given to the email address that you provided to the Company during the registration process. </Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>16.2 No Agency</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>No agency, partnership, joint venture, employee-employer, or franchiser-franchisee relationship between you and the Company is intended or created by this Terms of Use.</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>16.3 Governing Law</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The Terms of Use is governed by and construed in accordance with the laws of the State of Delaware without giving effect to any choice or conflict of law provision or rule. Any legal suit, action or proceeding arising out of or related to this Terms of Use or the App shall be instituted exclusively in the federal courts of the United States or the courts of general jurisdiction in the State of Delaware. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>16.4 Assignment</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>You agree that this Terms of Use, all rights herein, and all incorporated agreements may be automatically assigned by the Company, in its sole discretion, to one or more third parties in the event of a merger, acquisition, corporate reorganization, sale of all or substantially all of the Company’s assets, or similar transaction</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>16.5 No Guaranty</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The Company cannot and does not guarantee continuous, uninterrupted, or secure access to the App, and operation of the App may be interfered with by numerous factors outside of the Company’s control</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>16.6 Severability</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>If any provision of this Terms of Use is illegal or unenforceable under applicable law, the remainder of the provision will be amended to achieve as closely as possible the effect of the original term and all other provisions of the Terms of Use will continue in full force and effect</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>16.7 Waiver</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>No failure to exercise, and no delay in exercising, on the part of either party, any right or any power hereunder shall operate as a waiver thereof, nor shall any single or partial exercise of any right or power hereunder preclude further exercise of that or any other right hereunder. In the event of a conflict between this Terms of Use and any applicable purchase or other terms, the terms of this Terms of Use shall govern</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>16.8 Limitation</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>You and the Company each agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to the use of our App or this Terms of Use must be filed within one (1) year after the claim or cause of action arose or be forever barred</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>16.9 Titles</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>The section titles in the Terms of Use are for convenience only and have no legal or contractual effect</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>16.10 Entire Agreement</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>This Terms of Use and our Privacy Policy constitute the entire agreement between you and the Company with respect to the App and supersede all prior or contemporaneous understandings and agreements, whether written or oral, with respect to the App</Text></View>

<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{fontSize:15,textDecorationLine:"underline",color:'#9b9b9b'}}>16.11 Questions and Feedback</Text></View>
<View style={{marginTop:10,marginLeft:5,marginRight:5}}><Text style={{color:'#9b9b9b'}}>We welcome your questions, comments, and concerns about the Service. Please send us any and all feedback pertaining to the Service to support@busways.net</Text></View>
<View style={{marginTop:20,marginLeft:5,marginRight:5,marginBottom:5}}><Text style={{color:'#9b9b9b'}}>By indicating during registration that you have read and agreed to the Terms of Use, you are agreeing that you have read and understand the Terms of Use and agree to all of the terms of the Terms of Use. Thank you for your subscription, we are excited to welcome you to the BusWays family!
</Text></View>
</View>
              </ScrollView>
              <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderTopColor:'#00a2fe',height:height(15),width:width(100)}}>
                <TouchableOpacity onPress={this.back.bind(this)}><View style={{height:50,width:200,backgroundColor:'#00a2fe',justifyContent:'center',alignItems:'center'}}><Text style={{color:'white',fontSize:20}}>Ok</Text></View></TouchableOpacity>
              </View>
            </View>
          </View>
    );
  }
}
