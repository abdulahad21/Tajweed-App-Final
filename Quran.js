/*import{View,Text} from 'react-native';
import  React  from 'react';

const Quran =() => {
  return(
    <View>
      <Text>QURAN</Text>
    </View>
)
}
export default Quran;*/

/*import React, { Component } from 'react';
import Pdf from 'react-native-pdf';

class Quran extends Component {
  render() {
    const source = {uri:'https://www.kidsqurantutoring.com/downloads/Holy-Quran.pdf',cache:true};

    return (
      <View style={styles.container}>
        <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});

export default Quran;*/

import React, { Component } from 'react';
import { View, StyleSheet, WebView } from 'react-native';
import { Constants } from 'expo';

export default class Quran extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          bounces={false}
          scrollEnabled={false} 
          source={{ uri: 'https://www.kidsqurantutoring.com/downloads/Holy-Quran.pdf' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});



