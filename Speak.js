import{View,Text,StyleSheet,Image,Button, Alert,ScrollView, TouchableOpacity} from 'react-native';
import  React  from 'react';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';

const Speak =({navigation}) => {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");


  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      Alert.alert('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri=recording.getURI();
    console.log('Recording Stopped and Stored at',uri);

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      
      return (
       
       
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
          <Button style={styles.button} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button>
        </View>
        
        
      );
    });
  }
  return(
    <View style={styles.container}>
      <Text>{message}</Text>

      <TouchableOpacity style={styles.microinput}
      onPress={recording ? stopRecording : startRecording}>
      <Image source={require("./assets/microphone.png")} style={{ paddingLeft:150,resizeMode:'center'}}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      /*onPress={()=> navigation.navigate('RESULT-PAGE')}>*/
      onPress={()=> navigation.navigate('RESULT-PAGE')}>
                    <Text style={styles.buttonText}>Process</Text>
      </TouchableOpacity>
      <ScrollView style={styles.container}>
      {getRecordingLines()}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  microinput:{
      paddingVertical:40,
      backgroundColor:"blue",
      borderWidth:1,
      borderColor: "rgba(0,0,0.3)",
      marginTop:10,
      marginBottom:20,
      marginRight:130,
      marginLeft: 140,
      borderRadius: 100,
  },
  container: {
    height: "100%",
    backgroundColor:"#081B22",
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  fill: {
    flex: 1,
    margin: 16,
    color: 'white',
    
  },
  button: {
    paddingRight:5,
  },
  buttonStyle:{
    borderWidth:1,
    backgroundColor:"blue",
    borderColor: "rgba(0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius:10,   
},
  buttonText:{
    textAlign: 'center',
    marginVertical: 8,
    fontSize:20,
    fontFamily:"regular",
  }
})
export default Speak;