import React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
import CustomButton from "./../components/Button"
const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
          <CustomButton 
            onPress={() => props.navigation.navigate('Calendar')}
            text="Open Calendar"
            backgroundColor="royalblue"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    paddingHorizontal:10,
    paddingVertical:10,
  },
  plainText:{
    textAlign:"center",
    fontSize:24,
    color:"grey",
  },
});

export default HomeScreen;
