import{View,Text,StyleSheet,ScrollView} from 'react-native';
import  React  from 'react';

const Result =() => {

    
  return(
    <ScrollView style={styles.container}>
        <View style={{ paddingTop: 20, paddingBottom: 30 ,paddingLeft:25,paddingRight:25}}>
      <Text style={{ color: 'white', backgroundColor: '#255149', marginHorizontal: 25, fontSize: 25, textAlign: 'center', borderRadius: 30 }}>Recitation Result</Text>
      </View>
      <Text style={{ padding: 10 ,color: 'white', fontSize: 20}}>Correct Words</Text>
      <Text style={{ padding: 10 ,color: 'white', fontSize: 25 ,borderColor: 'white',borderWidth:1}}> قُلْ هُوَ ٱللَّهُ أَحَدٌ۝١ٱللَّهُ ٱلصَّمَدُ۝٢لَمْ يَلِدْ وَلَمْ يُولَدْ۝٣وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ۝٤</Text>
      
      <Text style={{ padding: 10 ,color: 'white', fontSize: 20}}>Yours Recited Words</Text>
      <Text style={{ padding: 10 ,color: 'white', fontSize: 25 ,borderColor: 'white',borderWidth:1}}> قُلْ هُوَ ٱللَّهُ أَحَدٌ۝١ٱللَّهُ ٱلصَّمَدُ۝٢لَمْ يَلِدْ وَلَمْ يُولَدْ۝٣وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ۝٤</Text>
      </ScrollView>
    
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#081B22',
      padding: 30,
      
    },
})
export default Result;