import{View,Text, StyleSheet} from 'react-native';
import  React,{useRef,useState}  from 'react';
import {Calendar} from 'react-native-calendars';

const Calendar1=() => {
  return(
    <View style={styles.main}> 
    <Calendar></Calendar>
  
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
      height: "100%",
      backgroundColor:"#FFFFFF",
  },
})

export default Calendar1;