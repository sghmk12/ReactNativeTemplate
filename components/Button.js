import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';


// This is kinda just a template for making custom components
//obviously use regular react buttons for the system
const styles = StyleSheet.create({
    buttonText:{
      fontSize:24,
    },
    buttonContainer:{
        alignItems:"center",
        borderRadius:5,
        paddingVertical:10,
        paddingHorizontal:10,
        marginVertical:10,
        marginHorizontal:10,
    }
});

class Button extends React.Component {
    static defaultProps = {
        text:"Button",
        textColor:"white",
        backgroundColor:"dodgerblue",
        onPress: () => {}
    }

    render () {
        const{text, textColor, backgroundColor, onPress} = this.props
        const containerStyle = [styles.buttonContainer]
        containerStyle.push({backgroundColor:backgroundColor})
        const textStyle = [styles.buttonText]
        textStyle.push({color:textColor})
        return (
          <TouchableOpacity onPress={onPress} style={containerStyle}>
              <Text style={textStyle}>{text}</Text>
          </TouchableOpacity>
      )
    }
}

export default Button;