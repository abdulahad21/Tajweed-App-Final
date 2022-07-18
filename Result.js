import{View,Text,StyleSheet,ScrollView} from 'react-native';
import  React  from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Result =() => {

    
  return(
    
    <ScrollView style={styles.container}>
      <ScrollView style={styles.textWrapper}>
      
        <View style={{ paddingTop: 20, paddingBottom: 30,alignItems:"center"}}>
      <Text style={{ color: 'white', backgroundColor: '#255149', width: 300, fontSize: 25, textAlign: 'center', borderRadius: 30 }}>Recitation Result</Text>
      </View>
      
      <Text style={{ padding: 10 ,color: 'white', fontSize: 20}}>Correct Words</Text>
      <Text style={{ padding: 10 ,color: 'white', fontSize: 25 ,borderColor: 'white',borderWidth:1}}> قُلْ هُوَ ٱللَّهُ أَحَدٌ۝١ٱللَّهُ ٱلصَّمَدُ۝٢لَمْ يَلِدْ وَلَمْ يُولَدْ۝٣وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ۝٤</Text>
      
      <Text style={{ padding: 10 ,color: 'white', fontSize: 20}}>Yours Recited Words</Text>
      
      <Text style={{marginBottom: 30 , padding: 10 ,color: 'white', fontSize: 25,borderColor: 'white',borderWidth:1}}>قُلْ هُوَ ٱللَّهُ أَحَدٌ۝١ٱللَّهُ ٱلصَّمَدُ۝٢لَمْ يَلِدْ وَلَمْ يُولَدْ۝٣وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ۝</Text>
      </ScrollView>
      </ScrollView>
      
      
    
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#081B22',
      padding:20,
      paddingHorizontal: 0,
      
    },
    textWrapper: {
      height: hp('80%'), // 80% of height device screen
      width: wp('100%'),  // 100% of width device screen
      padding :20,
    },
})
export default Result;