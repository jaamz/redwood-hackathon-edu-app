import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from './Button';
class Create extends Component {
    state = {  

    }
    render() { 
        let { textInputContainer } = styles
        return (  
            <View>
                <View style={textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={setName=>{this.setState({setName})}}
                        placeholder='Enter Set Name Here...'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={description=>{this.setState({description})}}
                        placeholder='Enter Description Here...'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={cardTerm=>{this.setState({cardTerm})}}
                        placeholder='Enter Card Term Here...'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={cardDefinition=>{this.setState({cardDefinition})}}
                        placeholder='Enter Card Definition Here...'
                    />
                    
                </View>
                {/* 
                <TouchableOpacity style={props.buttonStyle} onPress={props.buttonPressed}>
                    <Text style={props.textStyle}> {props.text} </Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    textInputContainer: {
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        margin: 10
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        height: 50,

    }
})
export default Create;