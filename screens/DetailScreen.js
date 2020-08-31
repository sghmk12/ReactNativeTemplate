import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.plainText}>
            Details
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    marginHorizontal:5,
    marginVertical:5,
  },
  plainText:{
    textAlign:"center",
    fontSize:24,
    color:"grey"
  }
});

export default DetailScreen;
