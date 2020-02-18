
import React, { Component } from 'react';
import {  
  View,
  Text,
  StatusBar,
  Navigator
} from 'react-native';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

StatusBar.setHidden(true);

export default class App extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <Authentication /> 
        <View style={{flex: 2}}>        
        <OrderHistory />
        </View>       
      </View>     
        
    );
  }
}
// <Navigator>
      //   initiaRoute={{name: 'MAIN'}}
      //   renderScene={(route, navigator) => {
      //     switch(route.name){
      //       case 'MAIN': return <Main />;
      //       case 'CHANGE_INFO': return <ChangeInfo />;
      //       case 'AUTHENTICATION': return <Authentication />;
      //       default: return <OrderHistory />;
      //     }
      //   }}
      // </Navigator>