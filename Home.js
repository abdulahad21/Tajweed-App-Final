import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import{
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import{
    JosefinSans_400Regular,
    JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import AppLoading from "expo-app-loading";

const Home=({navigation})=>{
    let [fontLoaded, error] = useFonts({
        bold: Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        regular:JosefinSans_400Regular,
        JosefinSans_500Medium,

    });
     if (!fontLoaded){
        return<AppLoading/>;
     }
    return(
        
        <ScrollView style={styles.container}>
      <Text style={{ color: 'white', fontSize: 25 }}>السلامُ علیکم</Text>

      {/* Speak */}
      <View style={{ paddingTop: 20 }}>
        <Text style={{ marginBottom: -16, zIndex: 1, color: 'white', backgroundColor: '#255149', marginHorizontal: 60, fontSize: 25, textAlign: 'center', borderRadius: 30 }}>بولیے</Text>
        <TouchableOpacity style={{ backgroundColor: '#3B8B7D', borderRadius: 12, paddingVertical: 30 }} onPress={() => navigation.navigate('SPEAK-PAGE')}>
          <Image source={require("./assets/speak.png")} style={{ zIndex: 1, width: 140, height: 50, resizeMode: 'center' }}></Image>
          <View style={[{ flexDirection: "row", justifyContent: 'space-around', marginTop: -50 }]}>
            <Image source={require("./assets/microphone.png")} style={{ width: 40, height: 40, resizeMode: 'center' }}></Image>
            <Text style={{ color: 'white', paddingHorizontal: 5, fontSize: 20 }}>آیت بول کر اس کی درستگی کیجئے</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Quran */}
      <View style={{ paddingTop: 20 }}>
        <Text style={{ marginBottom: -16, zIndex: 1, color: 'white', backgroundColor: '#255149', marginHorizontal: 60, fontSize: 25, textAlign: 'center', borderRadius: 30 }}>قرآن کریم</Text>
        <TouchableOpacity style={{ backgroundColor: '#3B8B7D', borderRadius: 12, paddingVertical: 30 }} onPress={() => navigation.navigate('QURAN-PAGE')}>
          <Image source={require("./assets/Quran1.png")} style={{ zIndex: 1, width: 140, height: 50, resizeMode: 'center' }}></Image>
          <View style={[{ flexDirection: "row", justifyContent: 'space-around', marginTop: -50 }]}>
            <Image source={require("./assets/Quran.png")} style={{ width: 40, height: 40, resizeMode: 'center' }}></Image>
            <Text style={{ color: 'white', paddingHorizontal: 5, fontSize: 20 }}>قرآن مجید کی تلاوت کیجئے</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Popular */}
      <View style={{ paddingTop: 20 }}>
        <Text style={{ marginBottom: -16, zIndex: 1, color: 'white', backgroundColor: '#255149', marginHorizontal: 60, fontSize: 25, textAlign: 'center', borderRadius: 30 }}>مشہور سورتیں</Text>
        <TouchableOpacity style={{ backgroundColor: '#3B8B7D', borderRadius: 12, paddingVertical: 30 }} onPress={() => navigation.navigate('POPULARSURAT')}>
          <Image source={require("./assets/popular.png")} style={{ zIndex: 1, width: 180, height: 50, resizeMode: 'center' }}></Image>
          <View style={[{ flexDirection: "row", justifyContent: 'space-around', marginTop: -50 }]}>
            <Image source={require("./assets/Book.png")} style={{ width: 40, height: 40, resizeMode: 'center' }}></Image>
            <Text style={{ color: 'white', paddingHorizontal: 5, fontSize: 20 }}>روزانہ تلاوت کی جانے والی سورتیں</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Counter */}
      <View style={{ paddingTop: 20 }}>
        <Text style={{ marginBottom: -16, zIndex: 1, color: 'white', backgroundColor: '#255149', marginHorizontal: 60, fontSize: 25, textAlign: 'center', borderRadius: 30 }}>تسبیح</Text>
        <TouchableOpacity style={{ backgroundColor: '#3B8B7D', borderRadius: 12, paddingVertical: 30 }}onPress={() => navigation.navigate('COUNTER-PAGE')} >
          <Image source={require("./assets/counter.png")} style={{ zIndex: 1, width: 190, height: 50, resizeMode: 'center' }}></Image>
          <View style={[{ flexDirection: "row", justifyContent: 'space-around', marginTop: -50 }]}>
            <Image source={require("./assets/tasbeeh.png")} style={{ width: 50, height: 40 }}></Image>
            <Text style={{ color: 'white', paddingHorizontal: 5, fontSize: 20 }}>تسبیح کاؤنٹر</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      <View style={{ paddingTop: 20 }}>
        <Text style={{ marginBottom: -16, zIndex: 1, color: 'white', backgroundColor: '#255149', marginHorizontal: 60, fontSize: 25, textAlign: 'center', borderRadius: 30 }}>کیلنڈر</Text>
        <TouchableOpacity style={{ backgroundColor: '#3B8B7D', borderRadius: 12, paddingVertical: 30 }} onPress={()=> navigation.navigate('CALENDAR-PAGE')}>
          <Image source={require("./assets/calendar1.png")} style={{ zIndex: 1, width: 210, height: 50, resizeMode: 'center' }}></Image>
          <View style={[{ flexDirection: "row", justifyContent: 'space-around', marginTop: -50 }]}>
            <Image source={require("./assets/calendar.png")} style={{ width: 50, height: 60 }}></Image>
            <Text style={{ color: 'white', paddingHorizontal: 5, fontSize: 20 }}>اسلامی اور عیسوی کیلنڈر</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Hadeeth */}
      <View style={{ paddingTop: 20, paddingBottom: 80 ,paddingLeft:25,paddingRight:25}}>
        <Text style={{ marginBottom: -16, zIndex: 1, color: 'white', backgroundColor: '#255149', marginHorizontal: 60, fontSize: 25, textAlign: 'center', borderRadius: 30 }}>حدیث نبوی ﷺ</Text>
        <Image source={require("./assets/Roza.jpeg")} style={{ width:280, height:280, borderRadius: 12, paddingVertical: 30}}></Image>
      </View>


    
    </ScrollView>
    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#081B22',
      padding: 40,
      
    },
  
  });
  

export default Home;