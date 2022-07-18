import{View,Text,StyleSheet,ScrollView,TouchableOpacity,Alert} from 'react-native';
import  React  from 'react';

const About =() => {
  return(
    <ScrollView style={styles.container}>
      
      <View style={{ paddingTop: 10, paddingBottom: 30,alignItems:"center"}}>
      <Text style={{ color: 'white', backgroundColor: '#255149', width: 300, fontSize: 25, textAlign: 'center', borderRadius: 30 }}>ABOUT US</Text>
      </View>
      <Text style={{color:"#fff",fontSize:25}}>SALAM,</Text>
      <Text style={{color:"#fff",fontSize:25}}>Welcome To Tajweed App.</Text>
      <Text style={{color:"#fff",fontSize:25}}>Our main Objective of this app is to correct the mistakes of tajweed.</Text>
      <Text style={{color:"#fff",fontSize:25}}> السلامُ علیکم-</Text>
      <Text style={{color:"#fff",fontSize:25}}> التجوید ایپ میں خوش آمدید-</Text>
      <Text style={{color:"#fff",paddingBottom:20,fontSize:25}}> ہماری ایپ کا مقصدلوگوں کی قرآن کریم کی تجویدکی غلطیوں کو درست کرنا ہے۔</Text>
      <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => Alert.alert('Thank You For Contact Us.')}>
                    <Text style={styles.buttonText}>CONTACT US</Text>
      </TouchableOpacity>
      <Text style={{color:"#fff",paddingBottom:20,fontSize:25}}>VISIT OUR WEBSITE;</Text>
      <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => Alert.alert('Welcome To Our Website')}>
                    <Text style={styles.buttonText}>www.TajweedApp.com</Text>
      </TouchableOpacity>
      <Text style={{color:"#fff",paddingBottom:20,fontSize:25}}>For any Kind of Question, Feedback or any Complain send your mail at;</Text>
      <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => Alert.alert('Thank You For Mail Us.')}>
                    <Text style={styles.buttonText}>support@tajweedapp.com</Text>
      </TouchableOpacity>
    </ScrollView>
)
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#081B22',
    padding: 10,  
    paddingHorizontal: 30, 
  },
  title:{
    color: '#fff',
    padding:10,
    textAlign:"center",
    fontSize:25,
    backgroundColor: '#255149',
    borderRadius:10,
    marginBottom:30,
  },
  buttonStyle:{
    padding:10,
    textAlign:"center",
    backgroundColor: '#3B8B7D',
    borderRadius:10,
    marginBottom:20,  
},
  buttonText:{
    textAlign: 'center',
    fontSize:25,
    color: '#fff',
  }
});
export default About;